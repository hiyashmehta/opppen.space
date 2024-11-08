import DashboardLayout from "@/components/shared/layouts/dashboard-layout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
