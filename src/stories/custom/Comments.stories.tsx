// @ts-ignore
import React from "react";
import LocaleProvider from "../../context/LocaleContext";
import { Comments, CommentsTimeline, EventsType } from "../../widgets/custom/Comments";


export default {
  title: "Components/Widgets/Custom/Comments",
};

export const Default = (): React.ReactElement => {

  const data = [
    {
      id: 1,
      text: "Totam odit eum distinctio tempore. Numquam illo dolorum laboriosam vel illum. Sunt saepe ab nihil soluta placeat ullam.\n" +
        "Eius ea enim ut. Unde consequatur ducimus esse ullam. Odio fugit reprehenderit sunt.\n" +
        "Recusandae a aliquid. Iusto quisquam temporibus a assumenda aut fuga. Tenetur cum quis saepe et alias delectus quos.\n" +
        "Corporis adipisci eaque quod. Aperiam voluptatum doloribus accusamus suscipit.\n" +
        "Iste corporis non quisquam adipisci fuga. Aperiam possimus est ratione modi dicta. Cum consequatur eius harum ea eius omnis.\n" +
        "Eveniet sit iste sed commodi cumque. Quis ipsam maxime quam eveniet.\n" +
        "Repellat officia praesentium adipisci aspernatur impedit. Voluptas architecto autem vero et praesentium dignissimos.\n" +
        "Nisi ex sapiente incidunt eveniet mollitia. Iure libero natus perferendis voluptate iure fuga.\n" +
        "Vel voluptate cumque laudantium. Reiciendis sapiente eaque neque exercitationem inventore nam.",
      author: "Ciríaco Pelayo Camps",
      email: "ciraco@example.com",
      date: "2023-04-01 10:00:00",
      isSender: true,
      isAuthor: false,
    },
    {
      id: 2,
      text: "Dicta eligendi pariatur ratione ipsam accusantium. Ad minus nesciunt optio id ipsum.\n" +
        "Incidunt eligendi doloremque molestias. Voluptate sapiente nulla veritatis.\n" +
        "Nostrum minima ad repudiandae optio laborum.\n" +
        "Adipisci sint quasi laudantium explicabo ab nostrum. Rerum nemo itaque officia. Velit accusamus itaque accusantium ducimus quidem quae cum.\n" +
        "Sequi possimus harum maxime. Qui laboriosam voluptate pariatur laudantium nam quo. Vel dolorum magni nam iusto sapiente animi quaerat. Debitis minus temporibus molestias quae accusamus.\n" +
        "Nobis ab adipisci laborum doloremque impedit quo. Tempore cumque accusamus voluptates. In non facere in.\n" +
        "Laboriosam exercitationem possimus quo sequi. Aspernatur quia consequuntur aspernatur repudiandae molestiae modi. Vero esse nisi dicta nihil accusantium nesciunt.\n" +
        "Modi voluptatem excepturi. Architecto sapiente nobis quis ipsam. Doloremque ipsum pariatur dicta at.",
      author: "Plácido Baeza Vaquero",
      email: "placido@example.com",
      date: "2023-04-01 11:00:00",
      isSender: false,
      isAuthor: true,
    },
    {
      id: 3,
      text: "Amet tempora ipsum ipsum delectus.\n" +
        "Autem minus magnam in eveniet. Veniam voluptas deleniti eaque sequi autem.\n" +
        "Occaecati laborum ut voluptatum maxime iure cupiditate. Facere vitae aliquid.\n" +
        "Nemo nihil enim quia exercitationem. Quisquam aut autem magni occaecati velit.\n" +
        "Perferendis impedit iure nostrum ratione nemo distinctio.\n" +
        "Facilis deserunt amet officia accusantium qui. Non corporis rerum deleniti harum optio ipsa ducimus. Veniam saepe illo aspernatur id quae omnis.\n" +
        "Distinctio dolor sequi odio officia amet natus. Quidem quidem quibusdam animi alias quia distinctio.\n" +
        "Eum placeat expedita possimus eveniet. Fugit earum corrupti itaque. Ab expedita officiis numquam.\n" +
        "Quos optio iure quos minima deserunt assumenda beatae. Illo quod non aliquid.\n" +
        "Nobis odio reprehenderit ullam numquam. Beatae molestiae aperiam ratione.\n" +
        "Quidem perferendis minima animi ipsa natus aliquam. Exercitationem perferendis sequi assumenda. Eaque ducimus saepe deleniti eum iure itaque.",
      author: "Jorge Acosta Valverde",
      email: "jorge@example.com",
      date: "2023-04-01 11:30:00",
      isSender: false,
      isAuthor: false,
    },
    {
      id: 4,
      text: "Esse tempora amet consectetur asperiores dicta. Quidem est harum tempora voluptatum mollitia.\n" +
        "Voluptate reprehenderit sint vitae laborum animi placeat nihil. Maxime iure porro delectus voluptate. Molestiae dolorem natus alias ipsam consequuntur. Nisi nam exercitationem voluptas saepe occaecati.\n" +
        "Reprehenderit quam ex est vel.\n" +
        "Magnam quidem laudantium reprehenderit rerum nam ducimus perspiciatis. Vero omnis sed ducimus quidem dolores dolor illum.\n" +
        "Corrupti a iste praesentium. Exercitationem cum id neque.\n" +
        "Optio repellat excepturi sapiente alias iusto quaerat. Explicabo fuga cupiditate atque porro. Qui fuga ea quis porro id.\n" +
        "Natus optio ab reiciendis quae aperiam tempore. Voluptatem asperiores adipisci ullam nobis. Saepe quas odit rem ad autem cum consequatur.\n" +
        "Numquam deleniti veniam rem. Enim doloremque consectetur quas reprehenderit. Numquam unde a animi odio sequi.\n" +
        "Cum at eos fuga.\n" +
        "Vel exercitationem excepturi placeat. Quisquam neque quasi impedit at.",
      author: "Ciríaco Pelayo Camps",
      email: "ciraco@example.com",
      date: "2023-04-01 13:00:00",
      isSender: true,
      isAuthor: false,
    }
  ]
  return (
    <LocaleProvider lang="es_ES">
      <Comments data={data} />
    </LocaleProvider>
  );
};

export const Timeline = () => {
  const data = [
    {
      type: "action",
      event: {
        date: "2023-04-01 10:00",
        action: "Draft",
      }
    },
    {
      type: "comment",
      event: {
        id: 1,
        text: "Totam odit eum distinctio tempore. Numquam illo dolorum laboriosam vel illum. Sunt saepe ab nihil soluta placeat ullam.\n" +
          "Eius ea enim ut. Unde consequatur ducimus esse ullam. Odio fugit reprehenderit sunt.\n" +
          "Recusandae a aliquid. Iusto quisquam temporibus a assumenda aut fuga. Tenetur cum quis saepe et alias delectus quos.\n" +
          "Corporis adipisci eaque quod. Aperiam voluptatum doloribus accusamus suscipit.\n" +
          "Iste corporis non quisquam adipisci fuga. Aperiam possimus est ratione modi dicta. Cum consequatur eius harum ea eius omnis.\n" +
          "Eveniet sit iste sed commodi cumque. Quis ipsam maxime quam eveniet.\n" +
          "Repellat officia praesentium adipisci aspernatur impedit. Voluptas architecto autem vero et praesentium dignissimos.\n" +
          "Nisi ex sapiente incidunt eveniet mollitia. Iure libero natus perferendis voluptate iure fuga.\n" +
          "Vel voluptate cumque laudantium. Reiciendis sapiente eaque neque exercitationem inventore nam.",
        author: "Ciríaco Pelayo Camps",
        email: "ciraco@example.com",
        date: "2023-04-01 10:00:00",
        isSender: true,
        isAuthor: true,
      }
    },
    {
      type: "action",
      event: {
        date: "2023-04-01 10:10",
        action: "Open",
      }
    },
    {
      type: "comment",
      event: {
        id: 2,
        text: "Dicta eligendi pariatur ratione ipsam accusantium. Ad minus nesciunt optio id ipsum.\n" +
          "Incidunt eligendi doloremque molestias. Voluptate sapiente nulla veritatis.\n" +
          "Nostrum minima ad repudiandae optio laborum.\n" +
          "Adipisci sint quasi laudantium explicabo ab nostrum. Rerum nemo itaque officia. Velit accusamus itaque accusantium ducimus quidem quae cum.\n" +
          "Sequi possimus harum maxime. Qui laboriosam voluptate pariatur laudantium nam quo. Vel dolorum magni nam iusto sapiente animi quaerat. Debitis minus temporibus molestias quae accusamus.\n" +
          "Nobis ab adipisci laborum doloremque impedit quo. Tempore cumque accusamus voluptates. In non facere in.\n" +
          "Laboriosam exercitationem possimus quo sequi. Aspernatur quia consequuntur aspernatur repudiandae molestiae modi. Vero esse nisi dicta nihil accusantium nesciunt.\n" +
          "Modi voluptatem excepturi. Architecto sapiente nobis quis ipsam. Doloremque ipsum pariatur dicta at.",
        author: "Plácido Baeza Vaquero",
        email: "placido@example.com",
        date: "2023-04-01 11:00:00",
        isSender: false,
        isAuthor: false,
      },
    },
    {
      type: "comment",
      event: {
        id: 4,
        text: "Esse tempora amet consectetur asperiores dicta. Quidem est harum tempora voluptatum mollitia.\n" +
          "Voluptate reprehenderit sint vitae laborum animi placeat nihil. Maxime iure porro delectus voluptate. Molestiae dolorem natus alias ipsam consequuntur. Nisi nam exercitationem voluptas saepe occaecati.\n" +
          "Reprehenderit quam ex est vel.\n" +
          "Magnam quidem laudantium reprehenderit rerum nam ducimus perspiciatis. Vero omnis sed ducimus quidem dolores dolor illum.\n" +
          "Corrupti a iste praesentium. Exercitationem cum id neque.\n" +
          "Optio repellat excepturi sapiente alias iusto quaerat. Explicabo fuga cupiditate atque porro. Qui fuga ea quis porro id.\n" +
          "Natus optio ab reiciendis quae aperiam tempore. Voluptatem asperiores adipisci ullam nobis. Saepe quas odit rem ad autem cum consequatur.\n" +
          "Numquam deleniti veniam rem. Enim doloremque consectetur quas reprehenderit. Numquam unde a animi odio sequi.\n" +
          "Cum at eos fuga.\n" +
          "Vel exercitationem excepturi placeat. Quisquam neque quasi impedit at.",
        author: "Ciríaco Pelayo Camps",
        email: "ciraco@example.com",
        date: "2023-04-01 13:00:00",
        isSender: true,
        isAuthor: false,
      }
    },
    {
      type: "action",
      event: {
        action: "Pendent",
        date: "2023-04-01 13:05:00"
      }
    },
    {
      type: "action",
      event: {
        action: "Close",
        date: "2023-04-01 13:35:00"
      }
    }
  ] as EventsType[]
  return (
    <LocaleProvider lang="es_ES">
      <CommentsTimeline value={data} />
    </LocaleProvider>
  );
}


