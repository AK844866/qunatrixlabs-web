module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Qunatrix/qunatrixlabs-web/app/api/notify/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Qunatrix/qunatrixlabs-web/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const { email, phone, name } = await request.json();
        if (!email || !phone) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Email and Phone number are required."
            }, {
                status: 400
            });
        }
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const fromWhatsApp = process.env.TWILIO_WHATSAPP_FROM || "whatsapp:+14155238886"; // Twilio Sandbox Number
        const toWhatsApp = `whatsapp:${process.env.WHATSAPP_TO_NUMBER || "+918448665756"}`; // Target recipient
        // If Twilio credentials are not configured, log to console for development verification
        if (!accountSid || !authToken) {
            console.warn("Twilio credentials missing. Lead captured locally:", {
                name,
                email,
                phone
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: "Lead captured locally (Twilio configuration missing in production)."
            });
        }
        // Call Twilio REST API to send WhatsApp message
        const basicAuth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");
        const messageBody = `New Lead Captured!\n\nName: ${name || "N/A"}\nEmail: ${email}\nPhone: ${phone}`;
        const params = new URLSearchParams();
        params.append("To", toWhatsApp);
        params.append("From", fromWhatsApp);
        params.append("Body", messageBody);
        const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
            method: "POST",
            headers: {
                Authorization: `Basic ${basicAuth}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params.toString()
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || "Failed to send WhatsApp message.");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            sid: result.sid
        });
    } catch (error) {
        console.error("WhatsApp Notification Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Qunatrix$2f$qunatrixlabs$2d$web$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Internal server error."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9f1952eb._.js.map