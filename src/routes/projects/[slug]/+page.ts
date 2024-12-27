import { error } from '@sveltejs/kit';
import { openSourceProjects, companyProjects, privateProjects } from '$lib/constants/projects';
import type { LoadParams } from '$lib/types/load-params';
import type { Project } from '$lib/types/project';

export const load = ({ params }: {params: LoadParams}) => {

  const { slug } = params;
  const allProjects: Project[] = [...openSourceProjects, ...companyProjects, ...privateProjects];
  const project: Project | undefined = allProjects.find((proj) => proj.slug === slug);

  if (!project) {
    throw error(404, 'Project not found');
  }

  return project;
};

