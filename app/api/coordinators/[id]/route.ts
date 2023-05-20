import { deleteCoordinator } from "@/app/model/CoordinatorService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {
    console.log(params.id)
    deleteCoordinator(params.id)
    return NextResponse.json({sucess:"ok"})
}