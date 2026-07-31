"use client";

import Image from "next/image";
import { Globe, Github, Video, Calendar, Timer, User, Users, ArrowUpRight } from "lucide-react";
import type { Project } from "@/config/project";
import Card from "@/components/common/Card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  completed: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  ongoing: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  started: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  discontinue: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("text-[10px] px-1.5 py-0.5 rounded border shrink-0 capitalize", statusColors[status])}>
      {status}
    </span>
  );
}

function TechChip({ label, muted = false }: { label: string; muted?: boolean }) {
  return (
    <span className={cn(
      "text-[10px] px-1.5 py-0.5 rounded border",
      muted ? "text-muted-foreground/40 border-transparent" : "bg-muted/50 text-muted-foreground/60"
    )}>
      {label}
    </span>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-[13px] text-muted-foreground/70 flex items-start gap-2">
            <span className="size-1 rounded-full bg-muted-foreground/30 mt-1.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetaItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-3.5 text-muted-foreground/40" />
      <span className="text-xs text-muted-foreground/60">{label}:</span>
      <span className="text-xs font-medium text-foreground/80">{value}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <Card className="flex flex-col gap-1.5 h-full">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{project.name}</h3>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-xs text-muted-foreground/60 line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <TechChip key={tech} label={tech} />
              ))}
              {project.technologies.length > 4 && (
                <TechChip label={`+${project.technologies.length - 4}`} muted />
              )}
            </div>
            <div className="flex items-center gap-4 mt-1 text-muted-foreground/40">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-foreground transition-colors"
                title="Live site"
              >
                <Globe className="size-3.5" />
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-foreground transition-colors"
                title="Source code"
              >
                <Github className="size-3.5" />
              </a>
              <span className="text-[10px] text-muted-foreground/40 ml-auto flex items-center gap-0.5">
                Details <ArrowUpRight className="size-2.5" />
              </span>
            </div>
          </Card>
        </div>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="max-w-2xl gap-0 p-0 overflow-hidden">
        {project.image && (
          <div className="relative h-40 sm:h-50 w-full bg-muted/30">
            <Image src={project.image} alt={project.name} fill className="object-cover mask-b-from-60%" />
            {/* <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" /> */}
          </div>
        )}

        <div className="px-6 pb-6 max-h-[60vh] overflow-y-auto">
          <DialogHeader className="mt-4">
            <div className="flex items-center gap-2">
              <StatusBadge status={project.status} />
              <span className="text-[10px] text-muted-foreground/40 font-mono uppercase tracking-wider">
                {project.year}
              </span>
            </div>
            <DialogTitle className="text-xl">{project.name}</DialogTitle>
            <DialogDescription className="text-[13px]">
              {project.shortDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
            <MetaItem icon={Calendar} label="Year" value={project.year} />
            <MetaItem icon={Timer} label="Duration" value={project.duration} />
            <MetaItem icon={User} label="Role" value={project.role} />
            <MetaItem icon={Users} label="Team" value={project.teamSize} />
          </div>

          <Separator className="my-5" />

          <div className="space-y-6">
            <p className="text-[13px] text-muted-foreground/80 leading-relaxed">
              {project.description}
            </p>

            {project.screenshots.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider mb-2">Screenshots</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.screenshots.map((shot) => (
                    <a
                      key={shot}
                      href={shot}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video rounded-lg border overflow-hidden bg-muted/20 block"
                      title="View full size"
                    >
                      <Image
                        src={shot}
                        alt={`${project.name} screenshot`}
                        fill
                        className="object-cover transition-transform duration-200 hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </div>

            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="rounded-lg border bg-muted/20 p-3 text-center">
                    <p className="text-lg font-semibold">{value}</p>
                    <p className="text-[11px] text-muted-foreground/60 capitalize">{key}</p>
                  </div>
                ))}
              </div>
            )}

            {project.features.length > 0 && (
              <DetailList title="Features" items={project.features} />
            )}
            {project.problemsSolved.length > 0 && (
              <DetailList title="Problems Solved" items={project.problemsSolved} />
            )}
            {project.challenges.length > 0 && (
              <DetailList title="Challenges" items={project.challenges} />
            )}
            {project.learning.length > 0 && (
              <DetailList title="Key Learnings" items={project.learning} />
            )}
            {project.roadmap && project.roadmap.length > 0 && (
              <DetailList title="Roadmap" items={project.roadmap} />
            )}
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t bg-background/95 backdrop-blur flex-row items-center justify-between">
          <div className="w-fit flex gap-2 ">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Globe className="size-3.5" /> Live
              </Button>
            </a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1.5">
                <Github className="size-3.5" /> Code
              </Button>
            </a>
          </div>
          <DialogClose asChild>
            <Button variant="outline" size="sm" className="ml-auto font-semibold">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectCard;
