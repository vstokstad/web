---
slug: "/projects/vulkan_engine"

title: "Vulkan engine"

sortOrder: 0

description: "I'm building a vulkan based game engine to learn vulkan, graphics, shaders and ECS. The 'ball' above is a 250mb .obj file where each 'hair' is separate, it renders without delay even on a laptop mac. "

video: 

img: "./images/GIF/vulkan_eng_basic.gif"

link: "https://github.com/vstokstad/vulkan_eng"

teamSize: "Solo project"

projectTime: "Ongoing"

engine: "Vulkan, C++, cross-platform"

role: "Programmer"

myWork: "In this project I'm trying to learn as much as possible. From setting up and managing a vulkan backend to basic gameplay systems, physics and ECS. I'm using some libraries for some parts, and doing others from scratch. I've got some working point lights, models and textures, and I am right now working on writing my own ECS."

lessons: "Vulkan is a lot of boilerplate, but that also teaches me a lot about how to manage the gpu, memory allocation and timings. It's really fun and not very forgiving. As a whole the project is a pretty good exercise in how to structure projects, abstraction and maintaining an ever-growing codebase."

isActive: true

hasCode: true

---
```cpp
  // global ubo
      global_ubo ubo{};
      ubo.projection = camera.getProjection();
      ubo.view = camera.getView();
      ubo.inv_view_mat = frame.camera.getInverseView();
      ubo.ambient_light_color = {0.2f, .2f, .2f, 0.2f};

      point_light_render_system.update(frame, ubo);

      // physics
      //  physics_system.update(frame);

      // write updates to buffer
      ubo_buffers[frame_index]->writeToIndex(&ubo, frame_index);
      ubo_buffers[frame_index]->flush();

      // Render
      renderer_.beginSwapChainRenderPass(command_buffer);

      //  rendering
      point_light_render_system.render(frame);
      simple_render_system.renderGameObjects(frame);

      // END
      renderer_.endSwapChainRenderPass(command_buffer);
      renderer_.endFrame();
    }
  }

  vkDeviceWaitIdle(device_.device());