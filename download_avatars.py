"""data.js에 있는 모든 오퍼레이터 사진을 avatars/ 폴더로 내려받습니다.

사용법:  python download_avatars.py
다 받은 뒤 app.js 맨 위 IMG_BASE를 "avatars/"로 바꾸면
외부 저장소 없이 사진이 내 사이트에서 바로 뜹니다.
"""
import os
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor

SRC = "https://raw.githubusercontent.com/yuanyan3060/ArknightsGameResource/main/avatar/"
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "avatars")

ids = sorted(set(re.findall(r'"(char_[0-9a-z_]+)"', open(os.path.join(HERE, "data.js"), encoding="utf-8").read())))
os.makedirs(OUT, exist_ok=True)


def get(cid):
    path = os.path.join(OUT, cid + ".png")
    if os.path.exists(path):
        return cid, "skip"
    try:
        urllib.request.urlretrieve(SRC + cid + ".png", path)
        return cid, "ok"
    except Exception as e:  # noqa: BLE001
        return cid, f"fail ({e})"


with ThreadPoolExecutor(16) as pool:
    results = list(pool.map(get, ids))

fails = [r for r in results if r[1].startswith("fail")]
print(f"{len(ids)}명 중 {len(ids) - len(fails)}명 완료")
for cid, msg in fails:
    print(cid, msg)
