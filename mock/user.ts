import { MockMethod } from 'vite-plugin-mock'
const Mock = require('mockjs')
export default [
  {
    url: '/user/list',
    response:() => {
      return {
        "code": 0,
        "msg": null,
        "data": {
          "dataList|10" :[
            {
              "id": "@id",
              "name": "@cname",
              "phone": "@pick([13913998972, 19941558406])",
              "deptName": "前端开发部"
            }
          ],
          "totalCount": 20,
          "totalPageCount": 2
        }
      }
    }
  },
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          nickname: '@cname',
          age: '@integer(10-100)',
          uid: '@id',
          url: '@image',
          city: '@city',
          country: '@county(true)',
          province: '@province',
          mobile_phone: '@phone',
          email: '@email',
          region: '@region',
          menus: [
            {
              menu_name: '一级导航',
              id: '@id',
              code: 'Nav1',
              children: [
                {
                  code: 'about',
                  menu_url: 'views/about',
                  access_permissions: '["about"]',
                  children: [],
                  menu_name: '测试1',
                  id: '@id'
                },
                {
                  code: 'home',
                  menu_url: 'views/home',
                  access_permissions: '["home"]',
                  children: [],
                  menu_name: '测试2',
                  id: '@id'
                }
              ]
            },

          ]
        },
      }
    },
  },
] as MockMethod[]
