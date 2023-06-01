import { Entity, Fields } from "remult";

@Entity("posts", {
  allowApiCrud: true,
})
export class Post {
  @Fields.autoIncrement()
  id=0

  @Fields.string()
  title = ""

  @Fields.string()
  content = ""

  @Fields.date()
  published = new Date()
}