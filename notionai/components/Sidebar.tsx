"use client"
import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Sidebar() {

    const menuOptions =(
        <>
        <NewDocumentButton />
        {/* my document */}
        {/* List */}
        {/* shared with Me */}
        {/* List */}
        </>
    );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40}/>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <div>
                        {/* option */}
                        {menuOptions}
                    </div>
                    
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
        <div className="hidden md:inline">
            {menuOptions}
        </div>
    </div>
  )
}

export default Sidebar