import { getAllCoordinator } from "@/app/model/CoordinatorService"
import { NextResponse } from "next/server"

export async function GET(){
    const coordinators = await getAllCoordinator()
    return NextResponse.json(coordinators)
    console.log("acessou o get....")

}