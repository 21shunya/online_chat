import http from '@/netClient/config.js';

export async function fetchMessages() {
  try {
    const response = await http.get('/chat/messages', {
      headers: {
        'x-access-token': localStorage.accessToken,
      },
    });

    return (
      response?.data?.messageList.filter((item) => item.isDeleted == false) ?? []
    ); /*фильтр is_deleted*/
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function sendMsg(message) {
  try {
    const response = await http.post(
      '/chat/messages/send',
      {
        message,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken,
        },
      },
    );
    if (!response?.data) console.log("msg doesn't send");
    console.log(response?.data);
    return response?.data ?? {};
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function editMsg(id, message) {
  try {
    const response = await http.patch('/chat/messages/' + id + '/edit', {
      message
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.accessToken,
      },
    }
    )
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function deleteMsg(id) {
  try {
    const response = await http.patch(
      '/chat/messages/' + id + '/delete',
      {
        id,
      },
      {
        headers: {
          'x-access-token': localStorage.accessToken,
        },
      },
    );
    console.log(response);
    return response?.data ?? {};
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function fetchUser() {
  try {
    const response = await http.get('/user/info', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.accessToken,
      },
    });
    return response?.data ?? {};
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function updateUser(login, email) {
  try {
    const response = await http.patch(
      '/user/info',
      {
        login,
        email,
      },
      {
        headers: {
          'x-access-token': localStorage.accessToken,
        },
      },
    );
    return response?.data ?? {};
  } catch (error) {
    console.error({ error });
    throw error;
  }
}
