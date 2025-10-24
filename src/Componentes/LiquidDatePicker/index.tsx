import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface LiquidDatePickerProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

const LiquidDatePicker: React.FC<LiquidDatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Selecione uma data',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value + 'T00:00:00') : null
  )
  const calendarRef = useRef<HTMLDivElement>(null)

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      })
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      })
    }
    
    // Next month days
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      })
    }
    
    return days
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    onChange(formattedDate)
    setIsOpen(false)
  }

  const formatDisplayDate = (date: Date) => {
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear()
  }

  const isSelected = (date: Date) => {
    if (!selectedDate) return false
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear()
  }

  return (
    <Container ref={calendarRef}>
      <InputWrapper
        onClick={() => !disabled && setIsOpen(!isOpen)}
        isOpen={isOpen}
        disabled={disabled}
        whileHover={!disabled ? { scale: 1.01 } : undefined}
        whileTap={!disabled ? { scale: 0.99 } : undefined}
      >
        <IconWrapper
          animate={{ rotate: isOpen ? 15 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiCalendar />
        </IconWrapper>
        <InputText hasValue={!!selectedDate}>
          {selectedDate ? formatDisplayDate(selectedDate) : placeholder}
        </InputText>
      </InputWrapper>

      <AnimatePresence>
        {isOpen && (
          <CalendarDropdown
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <CalendarHeader>
              <NavButton
                onClick={handlePrevMonth}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronLeft />
              </NavButton>
              <MonthYear>
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </MonthYear>
              <NavButton
                onClick={handleNextMonth}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronRight />
              </NavButton>
            </CalendarHeader>

            <WeekDaysRow>
              {weekDays.map(day => (
                <WeekDay key={day}>{day}</WeekDay>
              ))}
            </WeekDaysRow>

            <DaysGrid>
              {getDaysInMonth(currentMonth).map((dayInfo, index) => (
                <DayCell
                  key={index}
                  onClick={() => dayInfo.isCurrentMonth && handleDateSelect(dayInfo.date)}
                  isCurrentMonth={dayInfo.isCurrentMonth}
                  isToday={isToday(dayInfo.date)}
                  isSelected={isSelected(dayInfo.date)}
                  whileHover={dayInfo.isCurrentMonth ? { 
                    scale: 1.1,
                    backgroundColor: 'rgba(227, 6, 19, 0.2)'
                  } : undefined}
                  whileTap={dayInfo.isCurrentMonth ? { scale: 0.95 } : undefined}
                  transition={{ duration: 0.2 }}
                >
                  <DayNumber>{dayInfo.day}</DayNumber>
                  {isToday(dayInfo.date) && <TodayDot />}
                </DayCell>
              ))}
            </DaysGrid>
          </CalendarDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
`

const InputWrapper = styled(motion.div)<{ isOpen: boolean; disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 1.8rem;
  background: ${props => props.isOpen 
    ? 'rgba(227, 6, 19, 0.08)' 
    : 'rgba(255, 255, 255, 0.03)'};
  backdrop-filter: blur(20px);
  border: 2px solid ${props => props.isOpen
    ? 'rgba(227, 6, 19, 0.5)'
    : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 1.6rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(227, 6, 19, 0.1) 0%,
      transparent 50%,
      rgba(227, 6, 19, 0.05) 100%
    );
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: opacity 0.3s ease;
  }
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.3);
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(227, 6, 19, 0.1);
  }
`

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  color: var(--primary);
  font-size: 2rem;
  z-index: 1;
`

const InputText = styled.div<{ hasValue: boolean }>`
  flex: 1;
  font-size: 1.6rem;
  color: ${props => props.hasValue ? 'var(--white)' : 'rgba(255, 255, 255, 0.4)'};
  font-weight: ${props => props.hasValue ? '500' : '400'};
  z-index: 1;
`

const CalendarDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  right: 0;
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(227, 6, 19, 0.1),
    inset 0 0 30px rgba(227, 6, 19, 0.05);
  z-index: 1000;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
    width: 20px;
    height: 20px;
    background: rgba(20, 20, 20, 0.95);
    transform: rotate(45deg);
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    border-top: 2px solid rgba(255, 255, 255, 0.1);
  }
`

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const NavButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--white);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(227, 6, 19, 0.2);
    border-color: var(--primary);
    color: var(--primary);
  }
`

const MonthYear = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white);
  text-align: center;
`

const WeekDaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const WeekDay = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.5rem;
`

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`

const DayCell = styled(motion.div)<{ 
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean 
}>`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 1.2rem;
  cursor: ${props => props.isCurrentMonth ? 'pointer' : 'default'};
  background: ${props => {
    if (props.isSelected) return 'linear-gradient(135deg, var(--primary), #FF1744)'
    if (props.isToday) return 'rgba(227, 6, 19, 0.1)'
    return 'rgba(255, 255, 255, 0.02)'
  }};
  border: 1px solid ${props => {
    if (props.isSelected) return 'transparent'
    if (props.isToday) return 'rgba(227, 6, 19, 0.3)'
    return 'rgba(255, 255, 255, 0.05)'
  }};
  opacity: ${props => props.isCurrentMonth ? 1 : 0.3};
  
  &:hover {
    ${props => props.isCurrentMonth && !props.isSelected && `
      background: rgba(227, 6, 19, 0.15);
      border-color: rgba(227, 6, 19, 0.4);
    `}
  }
`

const DayNumber = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white);
`

const TodayDot = styled.div`
  position: absolute;
  bottom: 0.4rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: var(--primary);
`

export default LiquidDatePicker
