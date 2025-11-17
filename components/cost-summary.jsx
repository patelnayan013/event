'use client';

import { DISHES } from '@/lib/event-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


export function CostSummary({ lunchDishes, dinnerDishes, onClear }) {
  const calculateTotal = (dishIds) => {
    return dishIds.reduce((total, id) => {
      const dish = DISHES[id];
      return total + (dish?.cost || 0);
    }, 0);
  };

  const lunchCost = calculateTotal(lunchDishes);
  const dinnerCost = calculateTotal(dinnerDishes);
  const totalCost = lunchCost + dinnerCost;

  const allDishes = [...lunchDishes, ...dinnerDishes];

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader>
        <CardTitle className="text-primary">Cost Estimate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {allDishes.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              No dishes selected yet
            </p>
          ) : (
            <>
              {lunchDishes.length > 0 && (
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Lunch Items:</p>
                  <ul className="space-y-1 ml-4">
                    {lunchDishes.map((id) => {
                      const dish = DISHES[id];
                      return (
                        <li key={id} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{dish?.name}</span>
                          <span className="text-foreground font-medium">₹{dish?.cost}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex justify-between text-sm font-semibold border-t border-border pt-1 mt-2">
                    <span>Lunch Subtotal</span>
                    <span className="text-primary">₹{lunchCost}</span>
                  </div>
                </div>
              )}

              {dinnerDishes.length > 0 && (
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Dinner Items:</p>
                  <ul className="space-y-1 ml-4">
                    {dinnerDishes.map((id) => {
                      const dish = DISHES[id];
                      return (
                        <li key={id} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{dish?.name}</span>
                          <span className="text-foreground font-medium">₹{dish?.cost}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex justify-between text-sm font-semibold border-t border-border pt-1 mt-2">
                    <span>Dinner Subtotal</span>
                    <span className="text-primary">₹{dinnerCost}</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="border-t-2 border-primary/20 pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-foreground">Total Cost</span>
            <span className="text-3xl font-bold text-primary">₹{totalCost}</span>
          </div>

          {allDishes.length > 0 && onClear && (
            <Button variant="outline" className="w-full" onClick={onClear}>
              Clear Selection
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
