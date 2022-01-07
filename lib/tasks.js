import fetch from 'node-fetch';

export async function getAllTasksData() {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
    )
  );
  const tasks = await res.json();
  const staticfillterdTasks = tasks.sort(
    (a, b) =>
      new Date(b.created_at) - new Date(a.created_at)
  );
  return staticfillterdTasks;
}

export async function getAllTasksIds() {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`
    )
  );
  const tasks = await res.json();
  return tasks.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getTaskData(id) {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`
    )
  );
  const task = await res.json();
  return {
    task,
  };
}
