import React, { memo, useCallback } from 'react'
import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MessageWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store/player'
import { searchSong } from '@/views/player/service/player'

interface IProps {
  role: 'user' | 'assistant'
  content: string
  isStreaming?: boolean
}

const ChatMessage: FC<IProps> = ({ role, content, isStreaming }) => {
  const isUser = role === 'user'
  const dispatch = useAppDispatch()

  const handleSongClick = useCallback(
    async (songName: string, artist?: string) => {
      try {
        const keywords = artist ? `${songName} ${artist}` : songName
        const res: any = await searchSong(keywords, 1)
        const songId = res?.result?.songs?.[0]?.id
        if (songId) {
          dispatch(fetchCurrentSongAction(songId))
        }
      } catch (err) {
        console.warn('搜索歌曲失败:', err)
      }
    },
    [dispatch]
  )

  const renderContent = () => {
    if (isUser) {
      return <span>{content}</span>
    }

    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <span
              className="song-link"
              onClick={() => handleSongClick(String(children))}
            >
              {children}
            </span>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    )
  }

  return (
    <MessageWrapper isUser={isUser}>
      <div className="message-label">{isUser ? '你' : 'AI 助手'}</div>
      <div className="message-bubble">
        {renderContent()}
        {isStreaming && <span className="streaming-cursor" />}
      </div>
    </MessageWrapper>
  )
}

export default memo(ChatMessage)
