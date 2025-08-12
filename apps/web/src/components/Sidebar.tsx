import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-background">
      <div className="flex h-full flex-col px-3 py-4">
        <SidebarNav />
      </div>
    </aside>
  );
}