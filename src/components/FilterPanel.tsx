import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export interface FilterOptions {
  gameModes: string[];
  playerRange: [number, number];
  pingRange: [number, number];
  maps: string[];
  tags: string[];
}

interface FilterPanelProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  const [selectedGameModes, setSelectedGameModes] = useState<string[]>([]);
  const [playerRange, setPlayerRange] = useState<[number, number]>([0, 200]);
  const [pingRange, setPingRange] = useState<[number, number]>([0, 100]);
  const [selectedMaps, setSelectedMaps] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const gameModes = ["Roleplay", "Racing", "Deathmatch", "Cops & Robbers", "Freeroam"];
  const maps = ["Los Santos", "Liberty City", "Custom Track", "Arena", "Downtown"];
  const tags = ["Whitelist", "Economy", "Custom Jobs", "Active Staff", "Anti-Cheat", "24/7"];

  const toggleGameMode = (mode: string) => {
    const updated = selectedGameModes.includes(mode)
      ? selectedGameModes.filter(m => m !== mode)
      : [...selectedGameModes, mode];
    setSelectedGameModes(updated);
    applyFilters({ gameModes: updated });
  };

  const toggleMap = (map: string) => {
    const updated = selectedMaps.includes(map)
      ? selectedMaps.filter(m => m !== map)
      : [...selectedMaps, map];
    setSelectedMaps(updated);
    applyFilters({ maps: updated });
  };

  const toggleTag = (tag: string) => {
    const updated = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updated);
    applyFilters({ tags: updated });
  };

  const applyFilters = (partial?: Partial<FilterOptions>) => {
    onFilterChange({
      gameModes: partial?.gameModes ?? selectedGameModes,
      playerRange: partial?.playerRange ?? playerRange,
      pingRange: partial?.pingRange ?? pingRange,
      maps: partial?.maps ?? selectedMaps,
      tags: partial?.tags ?? selectedTags,
    });
  };

  const clearAllFilters = () => {
    setSelectedGameModes([]);
    setPlayerRange([0, 200]);
    setPingRange([0, 100]);
    setSelectedMaps([]);
    setSelectedTags([]);
    onFilterChange({
      gameModes: [],
      playerRange: [0, 200],
      pingRange: [0, 100],
      maps: [],
      tags: [],
    });
  };

  const activeFilterCount = 
    selectedGameModes.length + 
    selectedMaps.length + 
    selectedTags.length +
    (playerRange[0] !== 0 || playerRange[1] !== 200 ? 1 : 0) +
    (pingRange[0] !== 0 || pingRange[1] !== 100 ? 1 : 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2 relative">
          <Filter className="h-4 w-4" />
          Advanced Filters
          {activeFilterCount > 0 && (
            <Badge className="ml-1 px-1.5 py-0 h-5 min-w-[1.25rem] text-xs">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Advanced Filters</span>
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="gap-2 h-8"
              >
                <X className="h-3 w-3" />
                Clear All
              </Button>
            )}
          </SheetTitle>
          <SheetDescription>
            Refine your server search with advanced filtering options
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Game Modes */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Game Mode</Label>
            <div className="grid grid-cols-2 gap-2">
              {gameModes.map((mode) => (
                <div
                  key={mode}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedGameModes.includes(mode)
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                  onClick={() => toggleGameMode(mode)}
                >
                  <Checkbox
                    checked={selectedGameModes.includes(mode)}
                    onCheckedChange={() => toggleGameMode(mode)}
                    className="mr-2"
                  />
                  <span className="text-sm">{mode}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Player Count */}
          <div>
            <Label className="text-base font-semibold mb-3 block">
              Player Count: {playerRange[0]} - {playerRange[1]}
            </Label>
            <Slider
              min={0}
              max={200}
              step={10}
              value={playerRange}
              onValueChange={(value) => {
                const range = value as [number, number];
                setPlayerRange(range);
                applyFilters({ playerRange: range });
              }}
              className="mt-2"
            />
          </div>

          {/* Ping */}
          <div>
            <Label className="text-base font-semibold mb-3 block">
              Max Ping: {pingRange[1]}ms
            </Label>
            <Slider
              min={0}
              max={100}
              step={5}
              value={[pingRange[1]]}
              onValueChange={(value) => {
                const range: [number, number] = [0, value[0]];
                setPingRange(range);
                applyFilters({ pingRange: range });
              }}
              className="mt-2"
            />
          </div>

          {/* Maps */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Maps</Label>
            <div className="space-y-2">
              {maps.map((map) => (
                <div
                  key={map}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedMaps.includes(map)
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                  onClick={() => toggleMap(map)}
                >
                  <Checkbox
                    checked={selectedMaps.includes(map)}
                    onCheckedChange={() => toggleMap(map)}
                    className="mr-2"
                  />
                  <span className="text-sm">{map}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Server Features</Label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterPanel;