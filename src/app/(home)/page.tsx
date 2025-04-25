import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="felx flex-col">
        <div>
          <Button variant="elevated">
            I am a button
          </Button>
        </div>
        <div>
          <Input placeholder="I am an input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea value="I am a textarea" />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
