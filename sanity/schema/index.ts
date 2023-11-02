import { type SchemaTypeDefinition } from 'sanity'

import project from './project-schema'
import image from "./images-schema"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [image, project],
}
