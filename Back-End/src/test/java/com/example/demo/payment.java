package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepository;

@SpringBootTest
public class payment {
	@Autowired
	PaymentRepository paymentRepository;

	@Test
	public void testSavePayment() {
		Payment payment = new Payment();
		payment.setId(1L);
		payment.setName("buddhi");
		payment.setAddress("Main Road");
		payment.setMobile("0774673701");
		payment.setNote("Deliver My Office");
		payment.setTotal("9000");
		payment.setDividedAmount("3000");
		paymentRepository.save(payment);
		assertNotNull(paymentRepository.findById(1L).get());
	}

	@Test
	public void testAllData() {
		List<Payment> list1 = paymentRepository.findAll();
		assertThat(list1).size().isGreaterThan(0);
	}
}
