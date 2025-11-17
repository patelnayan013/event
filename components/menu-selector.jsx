'use client';

import { useState } from 'react';
import { DISHES } from '@/lib/event-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export function MenuSelector({
  eventType,
  mealTime,
  selectedDishes,
  onSelectionChange,
  recommendedDishes = [],
}) {
  const availableDishes = Object.values(DISHES).filter((dish) =>
    dish.eventTypes.includes(eventType)
  );

  const handleDishToggle = (dishId) => {
    const updated = selectedDishes.includes(dishId)
      ? selectedDishes.filter((id) => id !== dishId)
      : [...selectedDishes, dishId];
    onSelectionChange(updated);
  };

  const handleSelectRecommended = () => {
    onSelectionChange(recommendedDishes);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold capitalize">
          {mealTime} Menu Selection
        </h3>
        {recommendedDishes.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleSelectRecommended}
          >
            Use Recommendation
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {availableDishes.map((dish) => {
          const isSelected = selectedDishes.includes(dish.id);
          const isRecommended = recommendedDishes.includes(dish.id);

          return (
            <Card
              key={dish.id}
              className={`cursor-pointer transition-all ${
                isSelected ? 'border-primary bg-primary/5' : ''
              } ${isRecommended ? 'ring-2 ring-yellow-400/50' : ''}`}
              onClick={() => handleDishToggle(dish.id)}
            >
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <Checkbox checked={isSelected} onChange={() => {}} />
                  <div className="flex-1">
                    <div className="mb-2 overflow-hidden rounded-md bg-muted">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        width={80}
                        height={80}
                        className="w-full h-20 object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">{dish.name}</p>
                      <p className="text-primary font-semibold">₹{dish.cost}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {dish.ingredients.join(', ')}
                    </p>
                    {isRecommended && (
                      <p className="text-xs text-yellow-600 font-medium mt-2">
                        ✓ Recommended
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
