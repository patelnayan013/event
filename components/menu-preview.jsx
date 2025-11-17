'use client';

import { DISHES } from '@/lib/event-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';


export function MenuPreview({ lunchDishes, dinnerDishes }) {
  const renderMealPreview = (mealType, dishIds) => {
    if (dishIds.length === 0) {
      return (
        <div>
          <h4 className="font-semibold text-foreground mb-2 capitalize">{mealType}</h4>
          <p className="text-sm text-muted-foreground italic">No items selected</p>
        </div>
      );
    }

    return (
      <div>
        <h4 className="font-semibold text-foreground mb-2 capitalize">{mealType}</h4>
        <div className="space-y-2">
          {dishIds.map((id) => {
            const dish = DISHES[id];
            return (
              <div key={id} className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-md overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={dish?.image || ''}
                    alt={dish?.name || 'Dish'}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{dish?.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-accent/10 to-transparent">
      <CardHeader>
        <CardTitle className="text-base text-primary">Menu Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderMealPreview('Lunch', lunchDishes)}
        <div className="border-t border-border pt-4"></div>
        {renderMealPreview('Dinner', dinnerDishes)}
      </CardContent>
    </Card>
  );
}
