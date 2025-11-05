import { Star, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  playtime: string;
}

const ServerReviews = () => {
  const reviews: Review[] = [
    {
      id: "1",
      userName: "GamerPro123",
      userAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      rating: 5,
      comment:
        "Best roleplay server I've ever played on! Active staff, great community, and tons of custom features. Highly recommend!",
      date: "2 days ago",
      helpful: 24,
      playtime: "142h",
    },
    {
      id: "2",
      userName: "ProRacer99",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4,
      comment:
        "Great server overall, but can get laggy during peak hours. Economy system is well balanced.",
      date: "5 days ago",
      helpful: 12,
      playtime: "87h",
    },
    {
      id: "3",
      userName: "RPMaster",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      comment:
        "The custom jobs are amazing! Love the attention to detail. Community is super friendly and welcoming to new players.",
      date: "1 week ago",
      helpful: 31,
      playtime: "203h",
    },
  ];

  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <Card className="bg-card/30 backdrop-blur-sm border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-accent" />
            Player Reviews
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{averageRating}</span>
            <div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.round(parseFloat(averageRating))
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{reviews.length} reviews</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3 mb-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={review.userAvatar} alt={review.userName} />
                  <AvatarFallback>{review.userName.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sm">{review.userName}</p>
                    <Badge variant="outline" className="text-xs">
                      {review.playtime} played
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-3 w-3 ${
                            star <= review.rating ? "fill-accent text-accent" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{review.comment}</p>
              <Button variant="ghost" size="sm" className="gap-2 h-8">
                <ThumbsUp className="h-3 w-3" />
                Helpful ({review.helpful})
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          Write a Review
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServerReviews;