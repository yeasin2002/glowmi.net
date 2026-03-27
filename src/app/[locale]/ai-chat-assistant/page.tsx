import CommonNav from '@/components/shared/common-nav'
import { AiChatContent } from './ai-chat-content'
import { AiChatBox } from './ai-chatbox'

const AiChatAssistant = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <CommonNav />

      {/* Chat Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-40">
        <AiChatContent />
      </div>

      <AiChatBox />
    </div>
  )
}

export default AiChatAssistant
