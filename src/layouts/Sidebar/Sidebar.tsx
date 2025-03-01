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

// Books 
import BooksAsset from '@/core/Books';

export default function AppSidebar() {
  const selection = useSelector((state: { selection: SelectionState }) => state.selection);

  const dispatch = useDispatch();

  const data = {
    navMain: BooksAsset.allBooks.map((book, index) => ({
      index: index,
      title: `${index + 1}. ${book.title}`,
      url: "#",
      items: book.chapters.map((chapter) => ({
        index: index,
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
                      dispatch(setBook({
                        title: item.title,
                        index: item.index
                      }));
                    }}
                    className={`${selection.book.index == item.index ? "bg-gray-200" : ""} flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-gray-200 hover:text-accent-foreground cursor-pointer`}>
                    {item.title}
                    <ChevronRight className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-4 mt-2 flex flex-col gap-1">
                      {item.items.map((subItem, subIndex) => (
                        <SidebarMenuItem
                          key={subIndex}
                          onClick={() => {
                            dispatch(setBook({
                              title: item.title,
                              index: item.index
                            }));
                            dispatch(setChapter({
                              title: `${item.title}-${subItem.title}`,
                              index: subIndex
                            }));
                          }}
                          className={`${selection.chapter.index == subIndex ? "bg-gray-200" : ""} rounded-lg px-3 py-2 hover:bg-gray-200 hover:text-accent-foreground cursor-pointer`}>
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
