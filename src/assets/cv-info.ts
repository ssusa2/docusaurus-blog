type myTechStack =
  | 'React'
  | 'React Native'
  | 'React-Query'
  | 'Recoil'
  | 'TypeScript'

interface TaskType {
  task_title: string
  task_description: string
}

interface cvInfoType {
  name: string
  type: 'app' | 'web'
  task: TaskType[]
  description: string
  period: string
  content: string
  tech_stack: myTechStack[]
}

export const cvInfoList: cvInfoType[] = [
  {
    name: 'Foodist',
    type: 'app',
    task: [
      {
        task_title: '메뉴 접근 코드 리팩토링',
        task_description:
          '기존의 하드코딩된 배열을 상수 객체로 바꾸고 이를 사용함으로써, 코드의 가독성, 유지보수성, 재사용성을 향상시켰습니다. 상수화를 통해 접근 그룹을 의미 있는 이름으로 참조할 수 있으며, 타입 안전성을 확보했습니다. 이 방식은 코드 구조를 더 체계적으로 만들어 관리하기 쉽게 합니다.',
      },
      {
        task_title: '안드로이드 버전 타겟 업그레이드',
        task_description:
          '안드로이드 버전 타겟 업그레이드를 통해 구글 플레이 콘솔의 최신 정책을 준수하며 발생한 문제들을 해결했습니다. 업그레이드 과정에서 호환성 문제와 성능 저하 이슈를 발견하고, 이를 해결하기 위해 디버깅과 테스트를 거쳤습니다. 결과적으로 앱의 안정성과 보안이 향상되었고, 사용자 경험이 개선되었습니다.',
      },
      {
        task_title: '코드 푸시 및 메신저 배포 알림 연동',
        task_description:
          '코드 푸시 및 메신저 배포 알림을 자동화하여 배포 효율성과 팀 커뮤니케이션을 개선했습니다. 기존에는 수동으로 AOS와 iOS 배포 후, 코드 푸시 사이트에서 업데이트 버전을 확인하고 팀즈에 공지했습니다. 변경 후 쉘 스크립트를 통해 자동으로 AOS와 iOS를 배포하고, 코드 푸시 API와 팀즈 Webhook을 사용해 자동으로 업데이트 정보를 공유했습니다. 이를 통해 배포 시간 절약과 실시간 정보 공유를 실현했습니다. 자동화로 오류 가능성을 줄이고, 팀의 생산성을 향상시켰습니다.',
      },
      // {
      //   task_title: 'Push Notification Badge Fix',
      //   task_description:
      //     '푸시 알림이 도착했을 때, 알림 뱃지의 카운트가 제대로 동작하지 않는 문제를 해결했습니다. 네이티브 코드를 수정하여 일관된 사용자 경험을 제공하고, 안정성과 신뢰성을 향상시켰습니다. 사용자 피드백을 반영하여 문제를 신속히 해결했습니다.',
      // },
      {
        task_title: 'CodeTour를 활용한 생산성 향상 및 문서화',
        task_description:
          'CodeTour 익스텐션을 도입하여 복잡한 코드베이스의 파일과 폴더 관계를 정리, 코드 탐색 시간을 단축하고 문서화 기능을 부여했습니다. 이를 통해 유지보수성과 팀 협업 효율성을 높였습니다.',
      },
      // {
      //   task_title: 'Library Troubleshooting (iOS/Android)',
      //   task_description:
      //     'React Native를 사용하며 라이브러리를 사용할 때, iOS와 Android 간의 동작 차이를 해결했습니다. 각 플랫폼의 동작을 테스트하고, 코드 수정 및 설정 변경을 통해 동작 차이를 해결했습니다.',
      // },
      {
        task_title: 'Requirement Fulfillment and Refactoring',
        task_description:
          'Completed over 107 requirement tasks and refactoring, and developed more than 10 new pages.',
      },
    ],
    description:
      '푸디스트는 식자재 발주 앱으로, 사용자들이 식자재를 효율적으로 주문할 수 있도록 돕습니다. 앱의 주요 기능을 개선하고 유지보수하는 업무를 담당했습니다.',
    period: 'August 2023 – Present',
    content:
      'Worked on various tasks including menu access code refactoring, Android target upgrade, Code Push deployment, push notification badge fix, and library troubleshooting. Utilized TypeScript, Jest, Rollup, and CodeTour extension to enhance app performance and user experience.',
    tech_stack: ['React Native', 'Recoil', 'TypeScript'],
  },
]
