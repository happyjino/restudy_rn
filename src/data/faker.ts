import {faker} from '@faker-js/faker' // faker 패키지 설치가 바꼈다.
import * as U from './util'

export const randomId = (): string => faker.string.uuid()
export const randomName = (): string => faker.person.firstName()
export const randomEmail = (): string => faker.internet.email()
export const randomAvatarUrl = (name?: string): string => U.avatarUriByName(name ?? randomName()) // ?? 연산자는 왼쪽이 null인 경우에만 오른쪽을 반환한다
export const randomDate = (): Date => faker.date.recent()
export const randomParagraphs = (count: number = 2): string => U.makeArray(count).map(faker.lorem.paragraph).join(`\n`)
export const randomImage = (): string  => U.picsumUrl(U.random(800, 1000), U.random(800, 1000))
