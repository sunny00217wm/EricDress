#!/usr/bin bash

:<<!
build.sh
獲取核心內容並構建
!

_()
{
	echo "$ $*"
	$*
}

echo "----      clone      ----"
_ git clone https://github.com/sunny00217wm/EricDress-core core
echo "---- move and remove ----"
_ rm -fv package.json package-lock.json
_ mv -fv core/** ./
_ rm -rfv core
_ mv -fv config.ts config/config.ts
_ mv -fv ./*.txt ./config
echo "----      build      ----"
_ npm install
_ npm run build
_ node copy_config_txt.js