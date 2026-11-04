import { TIMELINE_ERAS_PART1 } from './timeline/eras_part1.js'
import { TIMELINE_ERAS_PART2 } from './timeline/eras_part2.js'
import {
  ERA_BANNER_IMAGES,
  ERA_DEFAULT_CONTEXT,
  ERA_DIVISION_DIAGRAM,
  HOANG_SA_BAC_HAI_INFOGRAPHIC,
  EVENT_TO_LEGAL_VALUE_FLOW,
  HISTORICAL_SOURCES_CLASSIFICATION,
  AUTHENTIC_ARCHIVES_SHOWCASE
} from './timelineInfographicsData.js'

/**
 * Toàn bộ 6 giai đoạn lịch sử xác lập và thực thi chủ quyền biển đảo Việt Nam
 * (Mỗi giai đoạn có hình ảnh đại diện riêng biệt)
 */
export const TIMELINE_ERAS = [
  ...TIMELINE_ERAS_PART1,
  ...TIMELINE_ERAS_PART2
].map((era, idx) => ({
  ...era,
  orderIndex: idx + 1,
  bannerImage: ERA_BANNER_IMAGES[era.id] || '/assets/timeline/era-01-truoc-tk17.svg',
  defaultContext: ERA_DEFAULT_CONTEXT[era.id] || era.summary
}))

/**
 * Danh sách phẳng toàn bộ 24 cột mốc lịch sử kèm đầy đủ 7 trường Hồ sơ sự kiện:
 * 1. Thời gian (timeDisplay)
 * 2. Tên sự kiện (title)
 * 3. Bối cảnh lịch sử (historicalContext)
 * 4. Nội dung sự kiện - Dữ kiện lịch sử (historicalFact)
 * 5. Ý nghĩa lịch sử - Nhận định nghiên cứu (historicalSignificance)
 * 6. Hình ảnh / Tư liệu & Khung trích dẫn gốc (image, imageCaption, documentQuote)
 * 7. Nguồn tham khảo & Phân biệt Tài liệu gốc / Tài liệu nghiên cứu (sourceName, sourceTypeClassification)
 */
export const ALL_TIMELINE_MILESTONES = TIMELINE_ERAS.flatMap((era) =>
  era.milestones.map((ms, mIdx) => {
    const hasExactDateOrYear = /\d{4}/.test(ms.timeDisplay)
    return {
      ...ms,
      globalOrder: `${era.orderIndex}.${mIdx + 1}`,
      eraCode: era.code,
      eraTitle: era.title,
      eraPeriodRange: era.periodRange,
      eraBannerImage: era.bannerImage,
      historicalContext: ms.historicalContext || era.defaultContext,
      sourceTypeClassification: {
        primarySourceNote: ms.documentQuote
          ? 'Trích dẫn từ văn bản hành chính / thư tịch / bản đồ hoặc bia ký lịch sử gốc.'
          : 'Tổng hợp từ hồ sơ di chỉ khảo cổ học và văn bản pháp lý nhà nước.',
        secondaryResearchNote:
          'Phần "Ý nghĩa lịch sử" là nhận định phân tích của các công trình sử học, pháp lý quốc tế và Sách giáo khoa GDPT 2018 (được tách biệt rõ với phần Dữ kiện lịch sử).',
        chronologyPrecisionNote: hasExactDateOrYear
          ? 'Mốc thời gian có năm/ngày tháng cụ thể ghi trong sử liệu và văn bản chính thức.'
          : 'Mốc thời gian xác định theo khoảng thế kỷ/thời kỳ khảo cổ học; cần tiếp tục đối chiếu tư liệu chuyên khảo khi nghiên cứu sâu.'
      }
    }
  })
)

export {
  ERA_DIVISION_DIAGRAM,
  HOANG_SA_BAC_HAI_INFOGRAPHIC,
  EVENT_TO_LEGAL_VALUE_FLOW,
  HISTORICAL_SOURCES_CLASSIFICATION,
  AUTHENTIC_ARCHIVES_SHOWCASE
}
