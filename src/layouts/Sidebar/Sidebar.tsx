"use client";

import React from 'react'

import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { SelectionState, setBook, setChapter } from '@/state/selection';

// Data - Import all books
import Book1 from "@/data/individual_books/01_ኦሪት ዘፍጥረት.json";
import Book2 from "@/data/individual_books/02_ኦሪት ዘጸአት.json";
import Book3 from "@/data/individual_books/03_ኦሪት ዘሌዋውያን.json";
import Book4 from "@/data/individual_books/04_ኦሪት ዘኍልቍ.json";
import Book5 from "@/data/individual_books/05_ኦሪት ዘዳግም.json";
import Book6 from "@/data/individual_books/06_መጽሐፈ ኢያሱ ወልደ ነዌ.json";
import Book7 from "@/data/individual_books/07_መጽሐፈ መሣፍንት.json";
import Book8 from "@/data/individual_books/08_መጽሐፈ ሩት.json";
import Book9 from "@/data/individual_books/09_መጽሐፈ ሳሙኤል ቀዳማዊ.json";
import Book10 from "@/data/individual_books/10_መጽሐፈ ሳሙኤል ካል.json";
import Book11 from "@/data/individual_books/11_መጽሐፈ ነገሥት ቀዳማዊ።.json";
import Book12 from "@/data/individual_books/12_መጽሐፈ ነገሥት ካልዕ።.json";
import Book13 from "@/data/individual_books/13_መጽሐፈ ዜና መዋዕል ቀዳማዊ።.json";
import Book14 from "@/data/individual_books/14_መጽሐፈ ዜና መዋዕል ካልዕ።.json";
import Book15 from "@/data/individual_books/15_መጽሐፈ ዕዝራ።.json";
import Book16 from "@/data/individual_books/16_መጽሐፈ ነህምያ።.json";
import Book17 from "@/data/individual_books/17_መጽሐፈ አስቴር።.json";
import Book18 from "@/data/individual_books/18_መጽሐፈ ኢዮብ።.json";
import Book19 from "@/data/individual_books/19_መዝሙረ ዳዊት.json";
import Book20 from "@/data/individual_books/20_መጽሐፈ ምሳሌ.json";
import Book21 from "@/data/individual_books/21_መጽሐፈ መክብብ.json";
import Book22 from "@/data/individual_books/22_መኃልየ መኃልይ ዘሰሎሞን.json";
import Book23 from "@/data/individual_books/23_ትንቢተ ኢሳይያስ.json";
import Book24 from "@/data/individual_books/24_ትንቢተ ኤርምያስ.json";
import Book25 from "@/data/individual_books/25_ሰቆቃው ኤርምያስ.json";
import Book26 from "@/data/individual_books/26_ትንቢተ ሕዝቅኤል.json";
import Book27 from "@/data/individual_books/27_ትንቢተ ዳንኤል.json";
import Book28 from "@/data/individual_books/28_ትንቢተ ሆሴዕ.json";
import Book29 from "@/data/individual_books/29_ትንቢተ ኢዮኤል.json";
import Book30 from "@/data/individual_books/30_ትንቢተ አሞጽ.json";
import Book31 from "@/data/individual_books/31_ትንቢተ አብድዩ.json";
import Book32 from "@/data/individual_books/32_ትንቢተ ዮናስ.json";
import Book33 from "@/data/individual_books/33_ትንቢተ ሚክያስ.json";
import Book34 from "@/data/individual_books/34_ትንቢተ ናሆም.json";
import Book35 from "@/data/individual_books/35_ትንቢተ ዕንባቆም.json";
import Book36 from "@/data/individual_books/36_ትንቢተ ሶፎንያስ.json";
import Book37 from "@/data/individual_books/37_ትንቢተ ሐጌ.json";
import Book38 from "@/data/individual_books/38_ትንቢተ ዘካርያስ.json";
import Book39 from "@/data/individual_books/39_ትንቢተ ሚልክያ.json";
import Book40 from "@/data/individual_books/40_የማቴዎስ ወንጌል.json";
import Book41 from "@/data/individual_books/41_የማርቆስ ወንጌል.json";
import Book42 from "@/data/individual_books/42_የሉቃስ ወንጌል.json";
import Book43 from "@/data/individual_books/43_የዮሐንስ ወንጌል.json";
import Book44 from "@/data/individual_books/44_የሐዋርያት ሥራ.json";
import Book45 from "@/data/individual_books/45_ወደ ሮሜ ሰዎች.json";
import Book46 from "@/data/individual_books/46_1ኛ ወደ ቆሮንቶስ ሰዎች.json";
import Book47 from "@/data/individual_books/47_2ኛ ወደ ቆሮንቶስ ሰዎች.json";
import Book48 from "@/data/individual_books/48_ወደ ገላትያ ሰዎች.json";
import Book49 from "@/data/individual_books/49_ወደ ኤፌሶን ሰዎች.json";
import Book50 from "@/data/individual_books/50_ወደ ፊልጵስዩስ ሰዎች.json";
import Book51 from "@/data/individual_books/51_ወደ ቆላስይስ ሰዎች.json";
import Book52 from "@/data/individual_books/52_1ኛ ወደ ተሰሎንቄ ሰዎች.json";
import Book53 from "@/data/individual_books/53_2ኛ ወደ ተሰሎንቄ ሰዎች.json";
import Book54 from "@/data/individual_books/54_1ኛ ወደ ጢሞቴዎስ.json";
import Book55 from "@/data/individual_books/55_2ኛ ወደ ጢሞቴዎስ.json";
import Book56 from "@/data/individual_books/56_ወደ ቲቶ.json";
import Book57 from "@/data/individual_books/57_ወደ ፊልሞና.json";
import Book58 from "@/data/individual_books/58_ወደ ዕብራውያን.json";
import Book59 from "@/data/individual_books/59_የያዕቆብ መልእክት.json";
import Book60 from "@/data/individual_books/60_1ኛ የጴጥሮስ መልእክት.json";
import Book61 from "@/data/individual_books/61_2ኛ የጴጥሮስ መልእክት.json";
import Book62 from "@/data/individual_books/62_1ኛ የዮሐንስ መልእክት.json";
import Book63 from "@/data/individual_books/63_2ኛ የዮሐንስ መልእክት.json";
import Book64 from "@/data/individual_books/64_3ኛ የዮሐንስ መልእክት.json";
import Book65 from "@/data/individual_books/65_የይሁዳ መልእክት.json";
import Book66 from "@/data/individual_books/66_የዮሐንስ ራእይ.json";



export default function AppSidebar() {
  const selection = useSelector((state: { selection: SelectionState }) => state.selection);

  const dispatch = useDispatch();

  // Create an array of all books
  const allBooks = [
    Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10,
    Book11, Book12, Book13, Book14, Book15, Book16, Book17, Book18, Book19, Book20,
    Book21, Book22, Book23, Book24, Book25, Book26, Book27, Book28, Book29, Book30,
    Book31, Book32, Book33, Book34, Book35, Book36, Book37, Book38, Book39, Book40,
    Book41, Book42, Book43, Book44, Book45, Book46, Book47, Book48, Book49, Book50,
    Book51, Book52, Book53, Book54, Book55, Book56, Book57, Book58, Book59, Book60,
    Book61, Book62, Book63, Book64, Book65, Book66
  ];

  const data = {
    navMain: allBooks.map((book, index) => ({
      title: `${index + 1}. ${book.title}`,
      url: "#",
      items: book.chapters.map((chapter) => ({
        title: `ምእራፍ ${chapter.chapter}`,
        url: "",
      }))
    }))
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-lg'>መፆህፍት</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item, index) => (
                <Collapsible key={index}>
                  <CollapsibleTrigger
                    onClick={() => {
                      dispatch(setBook(item.title));
                    }}
                    className={`${selection.book == item.title ? "bg-gray-200" : ""} flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-gray-200 hover:text-accent-foreground cursor-pointer`}>
                    {item.title}
                    <ChevronRight className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-4 mt-2 flex flex-col gap-1">
                      {item.items.map((subItem, subIndex) => (
                        <SidebarMenuItem
                          key={subIndex}
                          onClick={() => {
                            dispatch(setBook(item.title));
                            dispatch(setChapter(`${item.title}-${subItem.title}`));
                          }}
                          className={`${selection.chapter == `${item.title}-${subItem.title}` ? "bg-gray-200" : ""} rounded-lg px-3 py-2 hover:bg-gray-200 hover:text-accent-foreground cursor-pointer`}>
                          {subItem.title}
                        </SidebarMenuItem>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
