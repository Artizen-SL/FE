import React from 'react'

const NoticeListData = () => {
    const datas = [
        {
          noticeId: 1,
          noticeTitle: "첫 번째 공지입니다.",
          noticeContent: "첫 번째 공지 내용입니다.",
          noticeDate: "2022/01/02",
          imageList: [
            {
              image1:
                "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
            {
              image2:
                "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            },
          ],
        },
        {
            noticeId: 2,
            noticeTitle: "두 번째 공지입니다.",
            noticeContent: "두 번째 공지 내용입니다.",
            noticeDate: "2022/01/02",
            imageList: [
              {
                image1:
                  "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
              {
                image2:
                  "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              },
            ],
          },
      ];
    
      return datas;
}

export default NoticeListData
