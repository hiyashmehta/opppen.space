import { AppSidebar } from "@/components/app-sidebar";
import CreateCommunityDialog from "@/components/community/create/create-community-dialog";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <CreateCommunityDialog />
            <AppSidebar />
            <SidebarInset className="">
                {/* <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                    </div>
                </header> */}
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
