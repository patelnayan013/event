'use client';

import { CostSummary } from '@/components/cost-summary';
import { EventSelector } from '@/components/event-selector';
import { MealFilter } from '@/components/meal-filter';
import { MenuPreview } from '@/components/menu-preview';
import { MenuSelector } from '@/components/menu-selector';
import { Card, CardContent } from '@/components/ui/card';
import { EVENT_TYPES } from '@/lib/event-data';
import { useState } from 'react';

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lunchDishes, setLunchDishes] = useState([]);
  const [dinnerDishes, setDinnerDishes] = useState([]);
  const [mealFilter, setMealFilter] = useState('all');

  const handleEventSelect = (eventType) => {
    setSelectedEvent(eventType);
    setLunchDishes([]);
    setDinnerDishes([]);
  };

  const handleClearSelection = () => {
    setLunchDishes([]);
    setDinnerDishes([]);
  };

  const recommendedLunch = selectedEvent
    ? EVENT_TYPES[selectedEvent].bestCombinations.lunch
    : [];
  const recommendedDinner = selectedEvent
    ? EVENT_TYPES[selectedEvent].bestCombinations.dinner
    : [];

  const showLunch = mealFilter === 'all' || mealFilter === 'lunch';
  const showDinner = mealFilter === 'all' || mealFilter === 'dinner';

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            Event Catering Planner
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Plan your perfect event with intelligent menu recommendations and real-time cost estimates
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Event Selection */}
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <EventSelector
                selectedEvent={selectedEvent}
                onSelectEvent={handleEventSelect}
              />
            </CardContent>
          </Card>

          {/* Menu Selection and Cost Summary */}
          {selectedEvent && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-border/50">
                  <CardContent className="pt-6 pt-0">
                    <MealFilter value={mealFilter} onChange={setMealFilter} />
                  </CardContent>
                </Card>

                {/* Lunch Menu */}
                {showLunch && (
                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <MenuSelector
                        eventType={selectedEvent}
                        mealTime="lunch"
                        selectedDishes={lunchDishes}
                        onSelectionChange={setLunchDishes}
                        recommendedDishes={recommendedLunch}
                      />
                    </CardContent>
                  </Card>
                )}

                {/* Dinner Menu */}
                {showDinner && (
                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <MenuSelector
                        eventType={selectedEvent}
                        mealTime="dinner"
                        selectedDishes={dinnerDishes}
                        onSelectionChange={setDinnerDishes}
                        recommendedDishes={recommendedDinner}
                      />
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar - Cost Summary and Menu Preview */}
              <div className="lg:col-span-1 space-y-6">
                <div className="sticky top-4">
                  <MenuPreview
                    lunchDishes={lunchDishes}
                    dinnerDishes={dinnerDishes}
                  />

                  <div className="mt-6">
                    <CostSummary
                      lunchDishes={lunchDishes}
                      dinnerDishes={dinnerDishes}
                      onClear={handleClearSelection}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!selectedEvent && (
            <Card className="border-border/50 border-dashed">
              <CardContent className="py-16 text-center">
                <p className="text-muted-foreground text-lg">
                  Start by selecting an event type above to view available menu options
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
