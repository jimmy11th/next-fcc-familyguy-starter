import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import clientPromise from "../../../../lib/mongodb";
export async function GET(req, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movie = await db
            .collection("movies").findOne({ _id: new ObjectId(params._id) })
        return NextResponse.json({ movie })
    } catch (e) {
        console.error(e);
    }
}
