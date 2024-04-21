"use client";
import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, Receipt, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: Receipt,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      <div className="mt-5 ">
        {menuList.map((menu, index) => (
          <h2
            className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${
              path === menu.path ? "text-primary bg-blue-100" : ""
            }`}
            key={menu.id}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default SideNav;
