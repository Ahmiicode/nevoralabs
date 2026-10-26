import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Review from '@/models/Review';

// 1. GET: Database se tamam approved reviews fetch karna (newest first)
export async function GET() {
  try {
    await connectDB();
    const reviews = await Review.find({ isApproved: true })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews from database.' },
      { status: 500 }
    );
  }
}

// 2. POST: Naya review MongoDB mein save karna
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, role, location, serviceScope, rating, metric, text } = body;

    if (!name || !text) {
      return NextResponse.json(
        { error: 'Client name and review message are required.' },
        { status: 400 }
      );
    }

    const createdReview = await Review.create({
      name,
      role: role || 'Verified Client',
      location: location || 'Global Client',
      serviceScope: serviceScope || 'Next.js & MERN Architecture',
      rating: Number(rating) || 5,
      metric: metric || 'Milestone Achieved',
      metricSub: 'Verified Client Review',
      text,
      isApproved: true,
    });

    return NextResponse.json(createdReview, { status: 201 });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { error: 'Failed to save review to database.' },
      { status: 500 }
    );
  }
}