"use client"

import React from "react"
import { MoreHorizontal, Calendar, Users as UsersIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock Data
const projects = [
    {
        id: 1,
        title: "Website Redesign",
        client: "Acme Corp",
        status: "In Progress",
        statusColor: "bg-blue-100 text-blue-700 hover:bg-blue-100",
        date: "Dec 30, 2024",
        users: [1, 2, 3],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        id: 2,
        title: "Mobile App Development",
        client: "TechStart Inc",
        status: "Planning",
        statusColor: "bg-purple-100 text-purple-700 hover:bg-purple-100",
        date: "Jan 15, 2025",
        users: [4, 5],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
        id: 3,
        title: "Marketing Campaign",
        client: "Global Retail",
        status: "Review",
        statusColor: "bg-orange-100 text-orange-700 hover:bg-orange-100",
        date: "Dec 24, 2024",
        users: [2, 6, 7, 8],
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
    },
    {
        id: 4,
        title: "CRM Integration",
        client: "Logistics Co",
        status: "Completed",
        statusColor: "bg-green-100 text-green-700 hover:bg-green-100",
        date: "Nov 30, 2024",
        users: [1, 5],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
        id: 5,
        title: "Data Analytics Dashboard",
        client: "FinTech Sol",
        status: "In Progress",
        statusColor: "bg-blue-100 text-blue-700 hover:bg-blue-100",
        date: "Feb 01, 2025",
        users: [3],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
        id: 6,
        title: "Legacy System Migration",
        client: "GovAgency",
        status: "On Hold",
        statusColor: "bg-slate-100 text-slate-700 hover:bg-slate-100",
        date: "TBD",
        users: [4, 9, 10],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
]

export function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-md transition-all border-slate-200 overflow-hidden">
                    <div className="h-40 w-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className={`absolute top-3 right-3 z-20 shadow-sm border-0 ${project.statusColor}`}>
                            {project.status}
                        </Badge>
                    </div>
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardDescription className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                    {project.client}
                                </CardDescription>
                                <CardTitle className="text-lg text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </CardTitle>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 text-slate-400">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardFooter className="pt-0 flex items-center justify-between border-t border-slate-100 p-4 bg-slate-50/30">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            <Calendar className="h-3.5 w-3.5" />
                            {project.date}
                        </div>
                        <div className="flex -space-x-2">
                            {project.users.slice(0, 3).map((u, i) => (
                                <Avatar key={i} className="h-7 w-7 border-2 border-white ring-1 ring-slate-100">
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=${u}`} />
                                    <AvatarFallback>U{u}</AvatarFallback>
                                </Avatar>
                            ))}
                            {project.users.length > 3 && (
                                <div className="h-7 w-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">
                                    +{project.users.length - 3}
                                </div>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
