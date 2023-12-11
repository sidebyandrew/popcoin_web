'use client';
import { useIsMounted } from '@/hooks/use-is-mounted';
import {
  Button,
  Code,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { useIsSSR } from '@react-aria/ssr';
import { useEffect, useState } from 'react';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const time = today.getTime();
  // return `${year}- ${month} - ${date} ${time}  `;
  return new Date().toLocaleString();
}

function getLocation(successCallback: PositionCallback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback);
  } else {
    console.error('Not support: navigator.geolocation ');
  }
}

export default function Page() {
  let isSSR = useIsSSR();

  const isMounted = useIsMounted();
  const [currentDate, setCurrentDate] = useState('');
  const [location, setLocation] = useState('');
  const serverTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    let intervalId = setInterval(() => setCurrentDate(getDate()), 1000);

    processOnClick();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function processOnClick() {
    getLocation((x) => {
      setLocation('' + x?.coords?.latitude);
    });
  }

  return (
    <div>
      <div>{isSSR ? 'isSSR：Server' : 'isSSR：Client'}</div>
      <div>
        <Button color="primary" onClick={processOnClick}>
          Get Location
        </Button>
        <div>latitude: {location && JSON.stringify(location)}</div>
      </div>
      <div> Current Time: {currentDate}</div>
      <div>
        timezoneOffset ={isMounted && -new Date().getTimezoneOffset() / 60}
      </div>
      <div>
        Intl.timezone
        {isMounted && new Intl.DateTimeFormat().resolvedOptions().timeZone}
      </div>
      <div>serverTimeZone = {isMounted && serverTimeZone}</div>

      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Key</TableColumn>
          <TableColumn>Explain</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>GMT</TableCell>
            <TableCell>
              英国格林尼治时间为一天的中点，中国标准时间比英国格林尼治时间快8小时，也就是GMT+8
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>UTC</TableCell>
            <TableCell>
              协调世界时，是由原子钟提供的。在计算机的世界里，时间也是跟UTC对齐的。中国的标准时间是UTC+8。GMT则可以认为是UTC+0。
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>getTimezoneOffset</TableCell>
            <TableCell>
              <Code color="secondary">
                const timezoneOffset = -new Date().getTimezoneOffset() / 60;
                timezoneOffset =
                {isMounted && -new Date().getTimezoneOffset() / 60}
              </Code>
              <Code color="secondary">getTimezoneOffset(): number;</Code>
              <div>
                {' '}
                Gets the difference in minutes between the time on the local
                computer and Universal Coordinated Time (UTC).
              </div>
              <div>
                获取本地计算机上的时间与通用协调时间之间的分钟差。注意是用UTC减去本地时间，如果是正时区，则返回值为负数。
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>timezone</TableCell>
            <TableCell>
              Intl.DateTimeFormat().resolvedOptions().timeZone: ={' '}
              {isMounted &&
                new Intl.DateTimeFormat().resolvedOptions().timeZone}
            </TableCell>
          </TableRow>

          <TableRow key="5">
            <TableCell>4个CST</TableCell>
            <TableCell>
              <div>1、China Standard Time ： UTC+8</div>
              <div>2、Central Standard Time： UTC-6</div>
              <div>3、Central Standard Time（澳洲）</div>
              <div>Cuba Standard Time： 古巴</div>
            </TableCell>
          </TableRow>

          <TableRow key="6">
            <TableCell>
              timestamp(aka{' '}
              <a href="https://en.wikipedia.org/wiki/Unix_time">Unix time</a> )
            </TableCell>
            <TableCell>
              为了方便时间的存储、比较和传输，可以使用时间戳来处理时间。时间戳是Unix
              时间目前定义为自 1970 年 1 月 1 日星期四 00:00:00UTC
              以来经过的非闰秒数。
              <Code>Date.now()</Code>
              <Code>new Date().getTime()</Code>
              <Code>JS的时间戳单位是毫秒，13位的整数，如1698197289</Code>
              <Code>
                也有些单位是秒，10位的整数，如1698197，将在2287年升级到11位
              </Code>
            </TableCell>
          </TableRow>

          <TableRow key="7">
            <TableCell>new Date()是知道当前环境时区的</TableCell>
            <TableCell>
              <Code>new Date(1970-01-01T01:00:00Z)</Code>
              <Code>
                Thu Jan 01 1970 09:00:00 GMT+0800 (Central Standard Time)
              </Code>
              上面有个错误，实际上应该是China Standard Time，而不是Central
              Standard Time
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
