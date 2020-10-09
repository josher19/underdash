/**
 *
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

it('should split in chunks', function () {
  expect(f([1,2,3,4,5,6,7,8,9,10], 2)).to.deep.equal([[1,2],[3,4],[5,6],[7,8],[9,10]]);
  expect(f([1,2,3,4,5,6,7,8,9,10], 3)).to.deep.equal([[1,2,3],[4,5,6],[7,8,9],[10]]);
  expect(f([1,2,3,4,5,6,7,8,9,10], 5)).to.deep.equal([[1,2,3,4,5],[6,7,8,9,10]]);
  expect(f([1,2,3,4,5,6,7,8,9,10], 10)).to.deep.equal([[1,2,3,4,5,6,7,8,9,10]]);
  expect(f([1,2,3,4,5,6,7,8,9,10], 20)).to.deep.equal([[1,2,3,4,5,6,7,8,9,10]]);
});

it('should split in chunks with reasonable defaults', function () {
  expect(f([1,2,3,4], 1)).to.deep.equal([[1],[2],[3],[4]]);
  expect(f([1,2,3,4])).to.not.deep.equal([ [] ]);
  expect(f([1,2,3,4])).to.deep.equal([[1],[2],[3],[4]]);
});
