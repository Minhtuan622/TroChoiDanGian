import { Injectable } from '@angular/core';

interface TroChoi {
  name: string,
  detail: string,
  howtoplay: string,
  orther: string
}

@Injectable({
  providedIn: 'root'
})
export class TroChoiService {

  public trochoi: TroChoi[] = [
    {
      name: 'Trò chơi Ô ăn quan',
      detail: 'Ô ăn quan, hay còn gọi tắt là ăn quan hoặc ô quan là một trò chơi dân gian của trẻ em Việt Nam. Đây là trò chơi có tính chất chiến thuật thường dành cho hai người chơi trở lên thường là từ 2 đến 3 người và có thể sử dụng các vật liệu đa dạng, dễ kiếm để chuẩn bị cho trò chơi. Theo các nhà nghiên cứu, ô ăn quan thuộc họ trò chơi mancala đã hiện diện ở Ai Cập từ thời kỳ Đế chế (khoảng 1580 - 1150 TCN).',
      howtoplay: 'Mục tiêu cần đạt được để giành chiến thắng: người thắng cuộc trong trò chơi này là người mà khi cuộc chơi kết thúc có tổng số dân quy đổi nhiều hơn. Tùy theo luật chơi từng địa phương hoặc thỏa thuận giữa hai người chơi nhưng phổ biến là 1 quan được quy đổi bằng 10 dân hoặc 5 dân (cờ). Di chuyển quân: từng người chơi khi đến lượt của mình sẽ di chuyển dân theo phương án để có thể ăn được càng nhiều dân và quan hơn đối phương càng tốt. Người thực hiện lượt đi đầu tiên thường được xác định bằng cách oẳn tù tì hay thỏa thuận. Khi đến lượt, người chơi sẽ dùng tất cả số quân trong một ô có quân bất kỳ do người đó chọn trong số 5 ô vuông thuộc quyền kiểm soát của mình để lần lượt rải vào các ô, mỗi ô 1 quân, bắt đầu từ ô gần nhất và có thể rải ngược chiều xuôi chiều kim đồng hồ tùy ý. Khi rải hết quân cuối cùng, tùy tình huống mà người chơi sẽ phải xử lý tiếp.',
      orther: ''
    }
  ]

  constructor() { }
}
