"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  highlight?: boolean
  /** Per-item lamp colour (hex). Falls back to route-based colour. */
  glowColor?: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

/** Route → lamp colour map */
const routeGlow: Record<string, string> = {
  "/":             "#217AFF",  // Home     — blue
  "/services":     "#A855F7",  // Services — purple
  "/case-studies": "#10B981",  // Cases    — emerald
  "/about":        "#F97316",  // About    — orange
  "/contact":      "#EF4444",  // Contact  — red
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()

  const getActiveFromPath = () => {
    const match = items.find((item) => !item.highlight && item.url === pathname)
    return match ? match.name : items[0].name
  }

  const [activeTab, setActiveTab] = useState(getActiveFromPath)

  useEffect(() => {
    setActiveTab(getActiveFromPath())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  /** Colour for the current route */
  const lampColor = routeGlow[pathname] ?? "#217AFF"

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-xl shadow-black/40">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          if (item.highlight) {
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className="relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all bg-gradient-to-r from-[#0066FF] via-[#217AFF] to-[#A1BEFF] text-white hover:opacity-90 hover:shadow-[0_0_15px_rgba(33,122,255,0.5)] ml-1"
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
              </Link>
            )
          }

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors",
                "text-white/70 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  style={{ backgroundColor: `${lampColor}18` }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Tubelight tube — colour shifts per route */}
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                    style={{ backgroundColor: lampColor }}
                  >
                    <div
                      className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2"
                      style={{ backgroundColor: `${lampColor}50` }}
                    />
                    <div
                      className="absolute w-8 h-6 rounded-full blur-md -top-1"
                      style={{ backgroundColor: `${lampColor}35` }}
                    />
                    <div
                      className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2"
                      style={{ backgroundColor: `${lampColor}30` }}
                    />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
