const request = require('supertest');
const app = require('./app');

const initialArticle = {
  id: 1,
  title: "title 1",
  alltext: "some stuff",
  summary: null,
  datecreated: "0022-01-01T00:00:00.000Z",
  datemodified: "0022-01-01T00:00:00.000Z",
  imageurl: null,
  published: null,
  authorid: 1
};

describe('GET /api/v1/articles', () => {
  it('應該回傳所有文章', async () => {
    const res = await request(app.callback()).get('/api/v1/articles');
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    expect(res.body).toContainEqual(initialArticle);
  });
});

describe('POST /api/v1/articles', () => {
  it('應該成功新增一篇文章', async () => {
    const newArticle = {
      title: "New Article",
      alltext: "This is a new article",
      summary: "summary here",
      datecreated: "2025-05-21T00:00:00.000Z",
      datemodified: "2025-05-21T00:00:00.000Z",
      imageurl: null,
      published: true,
      authorid: 2
    };

    const res = await request(app.callback()).post('/api/v1/articles').send(newArticle);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("New Article");
    expect(res.body.id).toBeDefined();
  });

  it('應該在缺少欄位時回傳 400', async () => {
    const incomplete = { alltext: "Missing title" };
    const res = await request(app.callback()).post('/api/v1/articles').send(incomplete);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});

describe('GET /api/v1/articles/:id', () => {
  it('應該找到指定 ID 的文章', async () => {
    const res = await request(app.callback()).get('/api/v1/articles/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("title 1");
  });

  it('找不到 ID 時應回傳 404', async () => {
    const res = await request(app.callback()).get('/api/v1/articles/999');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});

describe('PUT /api/v1/articles/:id', () => {
  it('應該成功更新指定文章', async () => {
    const update = { title: "Updated Title" };
    const res = await request(app.callback()).put('/api/v1/articles/1').send(update);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Updated Title");
  });
});

describe('DELETE /api/v1/articles/:id', () => {
  it('應該成功刪除文章', async () => {
    const res = await request(app.callback()).delete('/api/v1/articles/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });
});
