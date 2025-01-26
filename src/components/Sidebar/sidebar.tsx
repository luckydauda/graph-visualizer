
import { useState } from "react";
import ImageWithDefaults from "../ui/ImageWithDefaults";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Collapsed state

  const toggleCollapse = () => setIsCollapsed(!isCollapsed); // Toggle collapse

  return (
    <aside
      className={`relative flex flex-col justify-between border-r bg-sidebarBg p-4 transition-all duration-smooth ease-smooth ${
        isCollapsed ? "w-sidebarCollapsed" : "w-sidebarExpanded"
      } min-h-screen border-sidebarBorder`}
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-row items-center gap-2 pl-2.5">
            {!isCollapsed && <img src="/aestelia.svg" />}
            {!isCollapsed && <h2 className="text-2xl font-medium">Astelia</h2>}
            {/* {isCollapsed && <img src="/aestelia.svg"  />} */}
          </div>
          {isCollapsed && <img src="/aestelia.svg" />}
          <button
        onClick={toggleCollapse}
      className="hidden md:flex h-8 w-8 items-center justify-center rounded-full"
>
  <img
    src="/collapser.svg"
    className={`transition-transform duration-300 ${
      isCollapsed ? "ml-[20px] rotate-180" : "ml-[60px] rotate-0"
    }`}
    alt="Collapse"
  />
</button>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          {["menu-1", "menu-2", "menu-3", "menu-5", "menu-6", "menu-7"].map(
            (menu, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-2 rounded-menu px-3 py-2 text-menuText hover:bg-menuHoverBg hover:text-black transition-all duration-fast ${
                  menu === "menu-5"
                    ? "bg-menuActiveBg text-menuActiveText"
                    : ""
                }`}
              >
                <ImageWithDefaults src={`/${menu}.svg`} alt={`Menu ${menu}` } width={25} height={25}/>
                {!isCollapsed && <p className="text-base">Lorem</p>}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4">
        {/* Settings */}
        <a
          href="#"
          className="flex items-center gap-2 rounded-menu px-3 py-2 text-menuText hover:bg-menuHoverBg hover:text-black transition-all duration-fast"
        >
          <ImageWithDefaults src="/menu-8.svg" alt="Settings" />
          {!isCollapsed && <p className="text-base">Lorem</p>}
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-menu px-3 py-2 text-menuText hover:bg-menuHoverBg hover:text-black transition-all duration-fast"
        >
          <ImageWithDefaults src="/menu-9.svg" alt="Help" />
          {!isCollapsed && <p className="text-base">Lorem</p>}
        </a>

        {/* Profile */}
        <div className="flex items-center justify-between rounded-menu px-3 py-2 text-menuText">
          <div className="flex items-center gap-2">
            <ImageWithDefaults src="/footer-logo.svg" alt="Profile Logo" width={50} height={50}/>
            {!isCollapsed && (
              <div>
                <p className="text-base">Lorem</p>
                <p className="text-base">Lorem</p>
              </div>
            )}
          </div>
          <ImageWithDefaults src="/log-out.svg" alt="Logout" width={20} height={20}/>
        </div>
      </div>
    </aside>
  );
}
