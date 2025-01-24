import { useState } from "react";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Collapsed state

  const toggleCollapse = () => setIsCollapsed(!isCollapsed); // Toggle collapse

  return (
    <aside
      className={`relative flex flex-col justify-between border-r border-gray-200 bg-white p-4 ${
        isCollapsed ? "w-20" : "w-64"
      } min-h-screen`} // Ensure full height on all screen sizes
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex flex-row items-center gap-2 pl-2.5">
            {!isCollapsed && <img src="/aestelia.svg" />}
            {!isCollapsed && <h2 className="text-2xl font-medium">Astelia</h2>}
            {isCollapsed && <img src="/aestelia.svg" className="w-40" />}
          </div>
          {isCollapsed && <img src="/aestelia.svg" className="w-40" />}
          <button
  onClick={toggleCollapse}
  className="hidden md:flex h-8 w-8 items-center justify-center rounded-full"
>
  <img
    src="/collapser.svg"
    className={`transition-transform ${
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
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black ${
                  menu === "menu-5" ? "bg-green-100 text-green-700" : ""
                }`}
              >
                <img src={`/${menu}.svg`} alt={`Menu ${menu}`} />
                {!isCollapsed && (
                  <p className="text-sm text-lightgray">Lorem</p>
                )}
              </a>
            ),
          )}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4">
        {/* Settings */}
        <a
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black"
        >
          <img src="/menu-8.svg" />

          {!isCollapsed && <p className="text-sm text-lightgray">Lorem</p>}
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-black"
        >
          <img src="/menu-9.svg" />
          {!isCollapsed && <p className="text-sm text-lightgray">Lorem</p>}
        </a>

        {/* Profile */}
        <div className="flex items-center justify-between rounded-md px-3 py-2 text-gray-700">
          <div className="flex items-center gap-2">
            <img src="/footer-logo.svg" />
            <div>
              {!isCollapsed && <p className="text-sm text-lightgray">Lorem</p>}
              {!isCollapsed && <p className="text-sm text-lightgray">Lorem</p>}
            </div>
          </div>
          <img src="/log-out.svg" />
         
        </div>
        
      </div>
    </aside>
  );
}
