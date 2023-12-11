import React from 'react';
import Svg, {Path} from 'react-native-svg';

import Colors from '../../styles/colors';

type SvgPropsType = {
  icon: Icon;
  configs?: {
    size?: number;
    fill?: string;
  };
};

export default function SvgIcon({icon, configs = {}}: SvgPropsType) {
  const {size = 24, fill = Colors.White} = configs;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Path d={IconPath[icon]} fill={fill} />
    </Svg>
  );
}

export type Icon = keyof typeof IconPath;

const IconPath = {
  Home: 'M5 19V10.308C5 10.052 5.05733 9.80966 5.172 9.58099C5.286 9.35232 5.444 9.16366 5.646 9.01499L11.031 4.93799C11.3123 4.72266 11.6343 4.61499 11.997 4.61499C12.359 4.61499 12.683 4.72266 12.969 4.93799L18.354 9.01499C18.556 9.16366 18.714 9.35232 18.828 9.58099C18.9427 9.80966 19 10.052 19 10.308V19C19 19.268 18.9003 19.5017 18.701 19.701C18.501 19.9003 18.2673 20 18 20H14.615C14.3863 20 14.1947 19.9227 14.04 19.768C13.8853 19.6133 13.808 19.4213 13.808 19.192V14.423C13.808 14.1943 13.7303 14.0027 13.575 13.848C13.4203 13.6927 13.2287 13.615 13 13.615H11C10.7713 13.615 10.5797 13.6927 10.425 13.848C10.2697 14.0027 10.192 14.1943 10.192 14.423V19.193C10.192 19.4217 10.1147 19.6133 9.96 19.768C9.80533 19.9227 9.61367 20 9.385 20H6C5.732 20 5.49833 19.9003 5.299 19.701C5.09967 19.501 5 19.2673 5 19Z',
  Setting:
    'M8.954 20H5C4.71933 20 4.48267 19.9033 4.29 19.71C4.09667 19.518 4 19.2813 4 19V15.046C4.56933 14.8793 5.045 14.5643 5.427 14.101C5.809 13.6377 6 13.104 6 12.5C6 11.896 5.809 11.3623 5.427 10.899C5.045 10.4357 4.56933 10.1207 4 9.95399V5.99999C4 5.71932 4.09667 5.48266 4.29 5.28999C4.482 5.09666 4.71867 4.99999 5 4.99999H9C9.18 4.42799 9.49533 3.97099 9.946 3.62899C10.3973 3.28632 10.9153 3.11499 11.5 3.11499C12.0847 3.11499 12.6027 3.28632 13.054 3.62899C13.5047 3.97099 13.82 4.42799 14 4.99999H18C18.2807 4.99999 18.5173 5.09666 18.71 5.28999C18.9033 5.48266 19 5.71932 19 5.99999V9.99999C19.572 10.18 20.029 10.4953 20.371 10.946C20.7137 11.3973 20.885 11.9153 20.885 12.5C20.885 13.0847 20.7137 13.6027 20.371 14.054C20.029 14.5047 19.572 14.82 19 15V19C19 19.2807 18.9033 19.5173 18.71 19.71C18.5173 19.9033 18.2807 20 18 20H14.046C13.866 19.3973 13.5427 18.9133 13.076 18.548C12.6087 18.1827 12.0833 18 11.5 18C10.9167 18 10.3913 18.1827 9.924 18.548C9.45733 18.9133 9.134 19.3973 8.954 20Z',
  Search:
    'M19.4851 20.154L13.2231 13.892C12.7231 14.318 12.1481 14.6477 11.4981 14.881C10.8481 15.1144 10.1948 15.231 9.53811 15.231C7.93677 15.231 6.58144 14.6767 5.47211 13.568C4.36277 12.4587 3.80811 11.1037 3.80811 9.50304C3.80811 7.90238 4.36211 6.54671 5.47011 5.43604C6.57877 4.32471 7.93344 3.76904 9.53411 3.76904C11.1354 3.76904 12.4914 4.32371 13.6021 5.43304C14.7128 6.54238 15.2681 7.89804 15.2681 9.50004C15.2681 10.1947 15.1451 10.867 14.8991 11.517C14.6524 12.167 14.3291 12.723 13.9291 13.185L20.1911 19.446L19.4841 20.154H19.4851ZM9.53811 14.23C10.8648 14.23 11.9851 13.7734 12.8991 12.86C13.8124 11.9467 14.2691 10.8264 14.2691 9.49904C14.2691 8.17238 13.8124 7.05238 12.8991 6.13904C11.9858 5.22571 10.8658 4.76904 9.5391 4.76904C8.21244 4.76904 7.09211 5.22571 6.17811 6.13904C5.26477 7.05238 4.80811 8.17238 4.80811 9.49904C4.80811 10.8257 5.26477 11.9457 6.17811 12.859C7.09144 13.7724 8.21144 14.23 9.53811 14.23Z',
  Close:
    'M12.0002 12.708L6.75423 17.954C6.6609 18.0473 6.54623 18.0973 6.41023 18.104C6.27423 18.1107 6.1529 18.0607 6.04623 17.954C5.93956 17.8473 5.88623 17.7293 5.88623 17.6C5.88623 17.4707 5.93956 17.3527 6.04623 17.246L11.2922 12L6.04623 6.75399C5.9529 6.66065 5.9029 6.54599 5.89623 6.40999C5.88956 6.27399 5.93956 6.15265 6.04623 6.04599C6.1529 5.93932 6.2709 5.88599 6.40023 5.88599C6.52956 5.88599 6.64756 5.93932 6.75423 6.04599L12.0002 11.292L17.2462 6.04599C17.3396 5.95265 17.4542 5.90265 17.5902 5.89599C17.7262 5.88932 17.8476 5.93932 17.9542 6.04599C18.0609 6.15265 18.1142 6.27065 18.1142 6.39999C18.1142 6.52932 18.0609 6.64732 17.9542 6.75399L12.7082 12L17.9542 17.246C18.0476 17.3393 18.0976 17.454 18.1042 17.59C18.1109 17.726 18.0609 17.8473 17.9542 17.954C17.8476 18.0607 17.7296 18.114 17.6002 18.114C17.4709 18.114 17.3529 18.0607 17.2462 17.954L12.0002 12.708Z',
};
