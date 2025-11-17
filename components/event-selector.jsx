'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EVENT_TYPES } from '@/lib/event-data';
import Image from 'next/image';


export function EventSelector({ selectedEvent, onSelectEvent }) {
  const eventTypes = ['marriage', 'birthday', 'corporate'];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Select Event Type</h2>
        <p className="text-muted-foreground">Choose the type of event you're planning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {eventTypes.map((eventType) => {
          const data = EVENT_TYPES[eventType];
          const isSelected = selectedEvent === eventType;

          return (
            <Card
              key={eventType}
              className={`cursor-pointer transition-all pt-0 overflow-hidden ${
                isSelected
                  ? 'border-cyan-600 bg-primary/5 ring-1 ring-cyan-600'
                  : 'hover:border-primary/50'
              }`}
              onClick={() => onSelectEvent(eventType)}
            >
              <div className="relative w-full h-40 bg-muted">
                <Image
                  src={data.image || "/placeholder.svg"}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="capitalize">{data.name}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant='outline'
                  className={`w-full ${
                    isSelected ? 'bg-cyan-600 text-white' : ''
                  }`}
                  onClick={() => onSelectEvent(eventType)}
                >
                  {isSelected ? 'Selected' : 'Select'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
