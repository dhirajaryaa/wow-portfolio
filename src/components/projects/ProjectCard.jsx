import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Globe,GithubIcon } from "lucide-react";

function ProjectCard({project}) {
  return (
  <Card className={'bg-muted pt-0'}>
              <CardHeader className={'p-0 gap-0 aspect-video rounded-tl-xl rounded-tr-xl overflow-hidden'}>
                <Image src={"/projects/quickformx.jpg"}
                  loading="lazy"
                  width={1280} height={720} alt={"QuickFormX project"}
                  className="w-full h-full object-cover" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 justify-between mb-4">
                  <Link href="/pow/quickformx">
                    <h3 className={'text-xl font-bold'}>QuickFormX</h3>
                  </Link>
                  <div className={'flex items-center gap-2'}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a href="" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                          <Globe />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className={'text-xs'}>
                        View Website
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger>
                        <a href="" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                          <GithubIcon />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className={'text-xs'}>
                        View Github
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <CardDescription className={'sm:text-base'}>A fast and flexible form builder that lets you create, customize, and manage forms in minutes. With drag-and-drop simplicity, smart validation, and seamless API integration, it’s perfect for quick, responsive, and reusable form solutions.</CardDescription>

                <div className="my-2">

                </div>

              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
  )
}

export default ProjectCard