import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

let fallbackViews = 0;

export async function GET() {
  try {
    if (!redis) {
      return NextResponse.json({ views: fallbackViews });
    }
    const views = (await redis.get<number>('resume_views')) || 0;
    return NextResponse.json({ views: Number(views) });
  } catch (error) {
    console.error('Error fetching resume views:', error);
    return NextResponse.json({ views: fallbackViews });
  }
}

export async function POST() {
  try {
    if (!redis) {
      fallbackViews += 1;
      return NextResponse.json({ views: fallbackViews });
    }

    const views = await redis.incr('resume_views');
    return NextResponse.json({ views: Number(views) });
  } catch (error) {
    console.error('Error updating resume views:', error);
    return NextResponse.json({ views: fallbackViews }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    if (redis) {
      await redis.set('resume_views', 0);
    }
    fallbackViews = 0;
    return NextResponse.json({ views: 0, message: 'Resume view count reset to 0' });
  } catch (error) {
    console.error('Error resetting resume views:', error);
    return NextResponse.json({ error: 'Failed to reset resume views' }, { status: 500 });
  }
}
