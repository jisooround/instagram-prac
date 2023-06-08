export default {
  title: 'User', // sanity에서 보는 이름
  name: 'user', // 모델 이름
  type: 'document', // 데이터의 타입
  fields: [
    // 데이터 안에 있는 fields들의 타입
    {
      title: 'Username', // 데이터 필드 이름(ui에서 보는 이름)
      name: 'username', // 백엔드에 접근할 때 사용하는 이름
      type: 'string', // 'key'의 타입
    },
    {
      title: 'Name', // 데이터 필드 이름(ui에서 보는 이름)
      name: 'name', // 백엔드에 접근할 때 사용하는 이름
      type: 'string', // 'key'의 타입
    },
    {
      title: 'Email', // 데이터 필드 이름(ui에서 보는 이름)
      name: 'email', // 백엔드에 접근할 때 사용하는 이름
      type: 'string', // 'key'의 타입
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(), //하나만 존재하는 조건
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(), //하나만 존재하는 조건
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
