import React from 'react'
import {
	Card,
	CardHeader,
	CardContent,
	CardDescription,
	CardTitle,
  } from './ui/card'
  import { Badge } from './ui/badge'
  
  interface Props {
	title: string
	description: string
	tags: readonly string[]
	link?: string
  }
  
  export const ProjectCard = React.memo(function ProjectCard({ title, description, tags, link }: Props) {
	return (
	  <Card className="group flex flex-col overflow-hidden border border-border bg-card text-card-foreground p-3 transition-all duration-200 hover:shadow-lg hover:border-primary/20">
		<CardHeader>
		  <div className="space-y-1">
			<CardTitle className="text-base">
			  {link ? (
				<a
				  href={link}
				  target="_blank"
				  className="inline-flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
				  rel="noreferrer"
				  aria-label={`Visit ${title} project`}
				>
				  {title}
				  <span className="h-1 w-1 rounded-full bg-green-500 transition-all duration-200 group-hover:scale-150" aria-hidden="true" />
				</a>
			  ) : (
				title
			  )}
			</CardTitle>
			<div className="hidden font-mono text-xs underline print:visible">
			  {link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<CardDescription className="font-mono text-xs leading-relaxed">
			  {description}
			</CardDescription>
		  </div>
		</CardHeader>
		<CardContent className="mt-auto flex">
		  <div className="mt-2 flex flex-wrap gap-1">
			{tags.map((tag) => (
			  <Badge className="px-1 py-0 text-[10px] transition-colors duration-200 hover:bg-primary/10" variant="secondary" key={tag}>
				{tag}
			  </Badge>
			))}
		  </div>
		</CardContent>
	  </Card>
	)
  })
  