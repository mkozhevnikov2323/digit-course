import { http, HttpResponse } from 'msw';
import { mockShipList } from './mockShipList';

interface AuthRequestBody {
  email: string;
  password: string;
}

export const handlers = [
  http.post('https://example.com/api/login', async ({ request }) => {
    const body = (await request.json()) as AuthRequestBody;
    const { email, password } = body;

    if (email === 'test@example.com' && password === 'Qwerty123') {
      return HttpResponse.json(
        {
          token: 'mock-token-123',
          user: { email },
        },
        {
          status: 200,
        },
      );
    }

    return HttpResponse.json(
      { message: 'Неверный email или пароль' },
      { status: 401 },
    );
  }),

  http.post('https://example.com/api/register', async ({ request }) => {
    const body = (await request.json()) as AuthRequestBody;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const { email, password } = body;

    return HttpResponse.json(
      {
        token: 'mock-token-registered',
        user: { email },
      },
      {
        status: 200,
      },
    );
  }),
  http.get('https://example.com/api/ships', () =>
    HttpResponse.json(mockShipList),
  ),
];
