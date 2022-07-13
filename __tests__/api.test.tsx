/**
 * @jest-environment node
 */

import { loadEnvConfig } from '@next/env';

import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createMocks,
  createRequest,
  createResponse,
  RequestMethod,
} from 'node-mocks-http';
import apiCheckout from '../pages/api/checkout';

type a = {
  message: string;
};
type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type APiResponse = NextApiResponse & ReturnType<typeof createResponse> & a;

import { mockCheckoutCart } from '../util/mockdata';

function mockReqRes(method: RequestMethod = 'POST') {
  const { req, res }: { req: ApiRequest; res: APiResponse } = createMocks({
    method,
  });

  return { req, res };
}

describe('/api/checkout API Endpoint', () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);

  it("should return a 200 message:payment successful'", async () => {
    const { req, res } = mockReqRes();
    req.body = mockCheckoutCart;

    await apiCheckout(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });

    const resData = res._getJSONData();
    expect(resData.message).toEqual('payment successful');
    expect(resData.id).toBeDefined();

    expect(res.statusMessage).toEqual('OK');
  });

  it('should return a 500 message something went wrong', async () => {
    const { req, res } = mockReqRes();

    await apiCheckout(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._getJSONData()).toEqual({
      statusCode: 500,
      message: 'something went wrong',
    });
  });

  it('should return a 405 Method not allowed', async () => {
    const { req, res } = mockReqRes('GET');

    await apiCheckout(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getJSONData()).toEqual({
      statusCode: 405,
      message: 'Method not allowed',
    });
  });
});
